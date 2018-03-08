import * as crypto from 'crypto';

const AES_KEY = 'yyfax';
const base = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

export const UtilProvider = {
    provide: 'util',
    useValue: {
        decrypt: (encrypted) => {
            try {
                const decipher = crypto.createDecipher('aes192', AES_KEY);
                let decrypted = decipher.update(encrypted, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                return decrypted;
            }
            catch (ex) {
                return '';
            }
        },
        yearRate: (n) => {
            let d = `${(n * 10000 / 100).toFixed(2) as any * 1}`;
            if (d.indexOf('.') < 0) {
                d = d + '.0';
            }
            return d;
        },
        appidConstruct: (uid) => {
            const md5 = crypto.createHash('md5');
            const md5Id = md5.update(uid).digest('hex');

            let i = 0, out = '';

            const subId = parseInt(md5Id.substring(8 * i, 8 * (i + 1)), 16);
            let int = subId & 0x3fffffff;

            while (i < 10){
                const val = 0x0000003d & int;
                out = out + base[val];
                int = int >> 2;
                i++;
            }

            return out;
        },
        getAction: (url) => {
            const reg = /([a-z]+)\.action/;
            const matchArr = url.match(reg);

            if (matchArr && matchArr.length) {
                return matchArr[1] || '';
            }

            return '';
        }
    }
};