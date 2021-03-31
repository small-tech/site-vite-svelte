////////////////////////////////////////////////////////////////////////////////
//
// This uses Auto Encrypt Localhost to ensure that trusted local certificates
// exist for localhost. Although these would be created when Site.js is run
// we also run this script on postinstall in the template to ensure that
// people won’t encounter an error if they run the client before they run
// Site.js.
//
// Copyright ⓒ 2021-present Aral Balkan, Small Technology Foundation.
//
////////////////////////////////////////////////////////////////////////////////

import autoEncryptLocalhost from '@small-tech/auto-encrypt-localhost'

const server = autoEncryptLocalhost.createServer(() => {
  server.close()
})
