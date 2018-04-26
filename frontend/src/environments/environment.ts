// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // security environment variables
  region: 'us-east-2',

  identityPoolId: 'us-east-2:0f0180f9-f2cc-4689-85ce-f3b18018b797',
  userPoolId: 'us-east-2_xMNfYLRLB',
  clientId: '42uc4cqgnu33ho6dd7031cr3l',

  rekognitionBucket: 'rekognition-pics',
  albumName: "usercontent",
  bucketRegion: 'us-east-2',

  rdsTableARN: 'arn:aws:rds:us-east-2:148747364860:db:treetapdatabase4',
  rdsTableName: 'USER_LOG',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''
};
