class AlertService {
    static NAP_TIME = 10000; // ms
    static MQ_QUEUE_NAME = "Alert";
    static NTYF_SH_API_URL = "https://ntfy.sh/SpicedDestinationCatering"; // Replace TOPIC with your actual topic

    static sendAlertToNtfy(alertMessage) {
        try {
            const url = new URL(AlertService.NTYF_SH_API_URL);
            const connection = url.openConnection();

            // Set the necessary HTTP method and headers
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "text/plain");
            connection.setDoOutput(true);

            // Write the alert message to the request body
            const os = connection.getOutputStream();
            const input = new TextEncoder().encode(alertMessage);
            os.write(input, 0, input.length);

            // Get the HTTP response code
            const responseCode = connection.getResponseCode();
            if (responseCode === HttpURLConnection.HTTP_OK) {
                console.log("Alert sent successfully to ntfy.sh");
            } else {
                console.log("Failed to send alert to ntfy.sh. HTTP Response Code: " + responseCode);
            }

            // Close the connection
            connection.disconnect();
        } catch (error) {
            console.error(error);
        }
    }
}
