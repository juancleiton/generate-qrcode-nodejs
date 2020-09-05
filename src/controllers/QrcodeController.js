const QRCode = require('qrcode');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const qrcodeConfig = require('../config/qrcode');

exports.gerenateQrcode = async (request, response) => {
  const { text = "https://github.com/juancleiton" } = request.query;

  QRCode.toString(text, qrcodeConfig, function(err, qrcode) {
    const filename = `qrcode-${crypto.randomBytes(5).toString('hex')}.svg`;
    const pathFile = path.resolve('tmp', 'qrcodes', filename);
    fs.writeFile(pathFile, qrcode, 'utf8',
      error => {
        if (error){
          return response.status(400).json({error});
        }
        return response.download(pathFile)
      },
    );
  });
}