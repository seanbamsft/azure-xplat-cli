// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto00123456';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3da09a3b-0d9b-43e9-8ff9-5ff321bc823d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1cd65811-a1c4-4bf3-99b0-4f60d7cee50a',
  'x-ms-routing-request-id': 'WESTUS:20151021T061100Z:1cd65811-a1c4-4bf3-99b0-4f60d7cee50a',
  date: 'Wed, 21 Oct 2015 06:10:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3da09a3b-0d9b-43e9-8ff9-5ff321bc823d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1cd65811-a1c4-4bf3-99b0-4f60d7cee50a',
  'x-ms-routing-request-id': 'WESTUS:20151021T061100Z:1cd65811-a1c4-4bf3-99b0-4f60d7cee50a',
  date: 'Wed, 21 Oct 2015 06:10:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27TestRole_644e0048-d283-467f-9a5d-49ca46345608%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '793cc3d5-b443-4a75-9047-cf03213bdbbf',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a231c8df-fdbc-427c-a30b-3718240db27d',
  'x-ms-routing-request-id': 'WESTUS:20151021T061100Z:a231c8df-fdbc-427c-a30b-3718240db27d',
  date: 'Wed, 21 Oct 2015 06:11:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27TestRole_644e0048-d283-467f-9a5d-49ca46345608%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '793cc3d5-b443-4a75-9047-cf03213bdbbf',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a231c8df-fdbc-427c-a30b-3718240db27d',
  'x-ms-routing-request-id': 'WESTUS:20151021T061100Z:a231c8df-fdbc-427c-a30b-3718240db27d',
  date: 'Wed, 21 Oct 2015 06:11:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0d3eed1-28d4-47d5-8af0-f5aa6411e734',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b6ee8c6b-1ce7-485b-b57b-dbc3ed14c732',
  'x-ms-routing-request-id': 'WESTUS:20151021T061102Z:b6ee8c6b-1ce7-485b-b57b-dbc3ed14c732',
  date: 'Wed, 21 Oct 2015 06:11:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_644e0048-d283-467f-9a5d-49ca46345608\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:56.6205750Z\",\"updatedOn\":\"2015-10-21T06:10:56.6205750Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/5f05fd3a-74c1-4087-9b9b-a299b36f134a\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5f05fd3a-74c1-4087-9b9b-a299b36f134a\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0d3eed1-28d4-47d5-8af0-f5aa6411e734',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b6ee8c6b-1ce7-485b-b57b-dbc3ed14c732',
  'x-ms-routing-request-id': 'WESTUS:20151021T061102Z:b6ee8c6b-1ce7-485b-b57b-dbc3ed14c732',
  date: 'Wed, 21 Oct 2015 06:11:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27invalid%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e51e4532-f436-4dd0-afa3-cd8f02072677',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '28b5a58c-309a-4756-b039-701d1432a887',
  'x-ms-routing-request-id': 'WESTUS:20151021T061102Z:28b5a58c-309a-4756-b039-701d1432a887',
  date: 'Wed, 21 Oct 2015 06:11:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27invalid%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e51e4532-f436-4dd0-afa3-cd8f02072677',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '28b5a58c-309a-4756-b039-701d1432a887',
  'x-ms-routing-request-id': 'WESTUS:20151021T061102Z:28b5a58c-309a-4756-b039-701d1432a887',
  date: 'Wed, 21 Oct 2015 06:11:02 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['644e0048-d283-467f-9a5d-49ca46345608','5f05fd3a-74c1-4087-9b9b-a299b36f134a'];};