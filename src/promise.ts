function asyncOperation(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Operation completed successfully");
            } else {
                reject("Operation failed");
            }
        }, 2000);
    });
}

// Using the promise:
asyncOperation()
    .then((result) => {
        console.log("Success:", result);
        // You can chain more promises here if needed
    })
    .catch((error) => {
        console.error("Error:", error);
        // Handle the error appropriately
    })
    .finally(() => {
        console.log("Fetch operation completed (success or failure).");
    });

console.log("Async operation initiated...");