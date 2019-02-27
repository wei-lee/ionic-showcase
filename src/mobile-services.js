let config = {
  "version": 1,
  "namespace": "test",
  "clientId": "org.aerogear.ionic.showcase",
  "services": [
    {
      "id": "e973164c-3687-11e9-9467-0af08791569c",
      "name": "keycloak",
      "type": "keycloak",
      "url": "https://keycloak-route-test.comm2.skunkhenry.com/auth",
      "config": {
        "auth-server-url": "https://keycloak-route-test.comm2.skunkhenry.com/auth",
        "confidential-port": 0,
        "public-client": true,
        "realm": "test",
        "resource": "org.aerogear.ionic.showcase-public",
        "ssl-required": "external"
      }
    },
    {
      "id": "0b68ec15-36a7-11e9-9467-0af08791569c",
      "name": "metrics",
      "type": "metrics",
      "url": "https://aerogear-app-metrics-test.comm2.skunkhenry.com/metrics",
      "config": {}
    },
    {
      "id": "e339e761-3687-11e9-9467-0af08791569c",
      "name": "sync-app-test-org.aerogear.ionic.showcase",
      "type": "sync-app",
      "url": "https://sync-app-test-test.comm2.skunkhenry.com/graphql",
      "config": {
        "websocketUrl": "wss://sync-app-test-test.comm2.skunkhenry.com/graphql"
      }
    },
    {
      "id": "88da8a49-368c-11e9-9467-0af08791569c",
      "name": "ups",
      "type": "push",
      "url": "https://ups-test.comm2.skunkhenry.com",
      "config": {
        "android": {
          "senderId": "881192658444",
          "variantId": "0c1d23c8-6673-4fde-b013-f009b05f8e79",
          "variantSecret": "f743eeb3-4e62-4466-b5a9-41aca01a8fd2"
        },
        "ios": {
          "variantId": "351975b7-f39a-4c8f-ac71-1a8f7dd3050a",
          "variantSecret": "5365904c-2aa3-4540-8c62-b44ddd62c354"
        }
      }
    }
  ]
};

module.exports = config;
