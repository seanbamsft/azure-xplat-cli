// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;TableEndpoint=http://yaxiatest.table.testrr1.xstore-test.windows-int.net/;QueueEndpoint=http://yaxiatest.queue.testrr1.xstore-test.windows-int.net/;FileEndpoint=http://yaxiatest.file.testrr1.xstore-test.windows-int.net/;BlobEndpoint=https://yaxiatest.blob.testrr1.xstore-test.windows-int.net/;AccountName=yaxiatest;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .head('/storageclitest3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Jul 2015 06:03:27 GMT',
  etag: '"0x8D2836D1CCF8585"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0c2a3ba3-001a-0003-3156-b5cb53000000',
  'x-ms-version': '2015-02-21',
  'x-ms-share-quota': '10',
  date: 'Fri, 03 Jul 2015 06:03:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .put('/storageclitest3?restype=share&comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Jul 2015 06:03:42 GMT',
  etag: '"0x8D2836D2603BE68"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b5a4a264-001a-002f-6d55-b5b3fd000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:03:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .head('/storageclitest3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Jul 2015 06:03:42 GMT',
  etag: '"0x8D2836D2603BE68"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b0bb8fbe-001a-0023-1556-b5d0a9000000',
  'x-ms-version': '2015-02-21',
  'x-ms-share-quota': '20',
  date: 'Fri, 03 Jul 2015 06:04:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .get('/storageclitest3?restype=share&comp=stats')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><ShareStats><ShareUsage>0</ShareUsage></ShareStats>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6c23d4aa-001a-000a-4f55-b53d25000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:03:24 GMT' });
 return result; }]];