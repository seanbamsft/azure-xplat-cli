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
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78bf59b4-dd8c-43f0-8e50-434efa6e0e8e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5501a511-e0ef-4468-988f-6dba2b2cda95',
  'x-ms-routing-request-id': 'WESTUS:20151021T061054Z:5501a511-e0ef-4468-988f-6dba2b2cda95',
  date: 'Wed, 21 Oct 2015 06:10:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78bf59b4-dd8c-43f0-8e50-434efa6e0e8e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5501a511-e0ef-4468-988f-6dba2b2cda95',
  'x-ms-routing-request-id': 'WESTUS:20151021T061054Z:5501a511-e0ef-4468-988f-6dba2b2cda95',
  date: 'Wed, 21 Oct 2015 06:10:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91a8736d-3e79-4afa-9f34-8513fba8e467',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6f28ef85-2abc-403a-a0fc-85467988547b',
  'x-ms-routing-request-id': 'WESTUS:20151021T061054Z:6f28ef85-2abc-403a-a0fc-85467988547b',
  date: 'Wed, 21 Oct 2015 06:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91a8736d-3e79-4afa-9f34-8513fba8e467',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6f28ef85-2abc-403a-a0fc-85467988547b',
  'x-ms-routing-request-id': 'WESTUS:20151021T061054Z:6f28ef85-2abc-403a-a0fc-85467988547b',
  date: 'Wed, 21 Oct 2015 06:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3564186e-a4c4-4502-9dc2-9b488e4eebed',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '96f22151-953f-4ba2-b890-37184e8c9dbc',
  'x-ms-routing-request-id': 'WESTUS:20151021T061055Z:96f22151-953f-4ba2-b890-37184e8c9dbc',
  date: 'Wed, 21 Oct 2015 06:10:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_221739a4-5fc1-4b25-83cd-c5424f3333fa\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-10-21T06:10:53.0903464Z\",\"updatedOn\":\"2015-10-21T06:10:53.0903464Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"0deff004-4679-43b4-8fa4-331e1033b5c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3564186e-a4c4-4502-9dc2-9b488e4eebed',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '96f22151-953f-4ba2-b890-37184e8c9dbc',
  'x-ms-routing-request-id': 'WESTUS:20151021T061055Z:96f22151-953f-4ba2-b890-37184e8c9dbc',
  date: 'Wed, 21 Oct 2015 06:10:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '0deff004-4679-43b4-8fa4-331e1033b5c8' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f5ed45-a8c2-4f2b-8e95-e365737e30b6',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ee2ac0f9-ce9c-44e5-8101-199a3b8df94d',
  'x-ms-routing-request-id': 'WESTUS:20151021T061056Z:ee2ac0f9-ce9c-44e5-8101-199a3b8df94d',
  date: 'Wed, 21 Oct 2015 06:10:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/0deff004-4679-43b4-8fa4-331e1033b5c8?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '0deff004-4679-43b4-8fa4-331e1033b5c8' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f5ed45-a8c2-4f2b-8e95-e365737e30b6',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ee2ac0f9-ce9c-44e5-8101-199a3b8df94d',
  'x-ms-routing-request-id': 'WESTUS:20151021T061056Z:ee2ac0f9-ce9c-44e5-8101-199a3b8df94d',
  date: 'Wed, 21 Oct 2015 06:10:55 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['221739a4-5fc1-4b25-83cd-c5424f3333fa','0deff004-4679-43b4-8fa4-331e1033b5c8'];};