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

async function processAsyncOperation() {
    console.log("Async operation initiated...");
    try {
        const result = await asyncOperation();
        console.log("Success:", result);
        // You can perform more asynchronous operations here sequentially
    } catch (error) {
        console.error("Error:", error);
        // Handle the error appropriately
    } finally {
        console.log("Fetch operation completed (success or failure).");
    }
}

processAsyncOperation();

export {}; 