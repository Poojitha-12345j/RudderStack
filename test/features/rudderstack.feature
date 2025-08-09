Feature: RudderStack Event Flow Verification

    Scenario: Sending an event and verifying delivery through Webhook destination
        Given the user navigates to Login Page
        When the user logs in with valid credentials
        And the user navigates to the Connections page
        And the user retrieves the data plane URL and write key
        And the user sends a test event to the HTTP source
        Then the API response should be successful
        And the user opens the webhook destination
        And the user views the Events tab
        Then the user reads the count of delivered and failed events
