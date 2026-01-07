import { useState } from "react";
import {
  Page,
  Layout,
  Card,
  TextField,
  Button,
} from "@shopify/polaris";

export default function AdditionalPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const saveMessage = async () => {
    setLoading(true);

    await fetch("/api/post-purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shop: window.Shopify.shop,
        message,
      }),
    });

    setLoading(false);
    alert("Message saved!");
  };

  return (
    <Page title="Post Purchase Message">
      <Layout>
        <Layout.Section>
          <Card>
            <TextField
              label="Post-purchase message"
              value={message}
              onChange={setMessage}
              multiline
            />
            <Button
              primary
              loading={loading}
              onClick={saveMessage}
            >
              Save message
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
