const encodeToBits = (input: string) => {
  return input
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(16, '0'))
    .join(' ');
};

const encodeToASCII = (bits: string) => {
  return bits
    .split(' ')
    .reduce((asciiArr: number[], bit16: string) => {
      // 16비트 → 8비트로 나눠서 ASCII로 변환
      for (let i = 0; i < bit16.length; i += 8) {
        const bit8 = bit16.substring(i, i + 8);

        // 공백 생김 막기
        if (bit8 !== '00000000') {
          asciiArr.push(parseInt(bit8, 2));
        }
      }
      return asciiArr;
    }, [])
    .map((code) => String.fromCharCode(code))
    .join('');
};

const encodeToBase64 = (ascii: string) => {
  return btoa(ascii);
};

const decodeToASCII = (base64: string) => {
  return atob(base64);
};

// ASCII의 한 글자는 8비트
const asciiToBinaryAndHex = (ascii: string) => {
  let binaryArr = [];
  let hexArr = [];

  for (let i = 0; i < ascii.length; i++) {
    let binary = ascii.charCodeAt(i).toString(2);
    let hex = ascii.charCodeAt(i).toString(16).toUpperCase().padStart(2, '0');

    binaryArr.push(binary);
    hexArr.push(hex);
  }

  return [binaryArr, hexArr];
};

const decodeToUTF16 = (ascii: string) => {
  const [binaryArr, hexArr] = asciiToBinaryAndHex(ascii);
  let result = '';

  for (let i = 0; i < binaryArr.length; i++) {
    const binary = binaryArr[i];
    let word: string;

    // surrogate 판별
    if (binary.startsWith('110110') && binaryArr[i + 3].startsWith('110111')) {
      result +=
        String.fromCharCode(parseInt(hexArr.slice(i, i + 2).join(''), 16)) +
        String.fromCharCode(parseInt(hexArr.slice(i + 2, i + 4).join(''), 16));
      i += 3;
      continue;
    }

    // 공백이 제거되는 문자는 binary가 7글자 이하이다.
    else if (binary.length < 8) {
      word = hexArr[i].padStart(16, '0');
    } else {
      word = hexArr.slice(i, i + 2).join('');
      i += 1;
    }

    const utf16 = parseInt(word, 16);
    result += String.fromCharCode(utf16);
  }

  return result;
};

export const encodeDecodeInput = (input: string) => {
  const encodedBits = encodeToBits(input);
  const encodedASCII = encodeToASCII(encodedBits);
  const encodedBase64 = encodeToBase64(encodedASCII);
  const decodedASCII = decodeToASCII(encodedBase64);
  const decodedUTF16 = decodeToUTF16(decodedASCII);

  return [encodedBits, encodedASCII, encodedBase64, decodedASCII, decodedUTF16];
};
