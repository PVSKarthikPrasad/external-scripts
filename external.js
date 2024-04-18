// Function to log the Shopify object
function logShopifyObject() {
    if (window.Shopify) {
        console.log(window.Shopify);
        console.log("injected!!!")
    } else {
        console.log("Shopify object not found yet. Retrying...");
        setTimeout(logShopifyObject, 1000); // Retry after 1 second
    }
}

// Call the function to start checking for the Shopify object
logShopifyObject();