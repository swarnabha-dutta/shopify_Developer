import {
  extend,
  Text,
  BlockStack,
} from "@shopify/post-purchase-ui-extensions-react";

extend("Checkout::PostPurchase::Render", async (root) => {
  const message = "You’ll receive a discount on your next purchase 🎉";

  root.append(
    <BlockStack spacing="loose">
      <Text size="large" emphasis="bold">
        Thank you for your order 🙏
      </Text>
      <Text>{message}</Text>
    </BlockStack>
  );
});
