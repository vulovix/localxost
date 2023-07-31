import Subset from "./subset";
import { SubsetEnum } from "./types";

export function Cryptograph() {
    let sentence = "";
    let decrypted = "";
    let placeholders = Subset.en;

    function encrypt() {
        const o = sentence.split("");

        for (let i = 0; i < o.length; i++) {
            if (placeholders.includes(o[i])) {
                o[i] = placeholders[Math.floor(Math.random() * placeholders.length)];
            }
        }
        return o.join("");
    }

    function decrypt() {
        const enc = decrypted.split("").filter((x) => !!x);
        if (decrypted.length !== sentence.length) {
            decrypted = encrypt();
        }
        for (let i = 0; i < sentence.length; i++) {
            if (enc[i] !== sentence[i]) {
                const r = placeholders[Math.floor(Math.random() * placeholders.length)];
                enc[i] = r;
                const newSentence = enc.join("");
                if (newSentence.length === sentence.length) {
                    decrypted = newSentence;
                }
            }
        }
        return decrypted;
    }

    const run = (s: string, speed = 20, cb = (d: string) => undefined) => {
        sentence = s;
        decrypted = encrypt();
        const interval = setInterval(() => {
            const isDone = decrypted === sentence;
            decrypted = decrypt();
            cb(decrypted);
            if (isDone) {
                clearInterval(interval);
            }
        }, speed);
    };

    function setSubset(subset: SubsetEnum) {
        if (Subset[subset]) {
            placeholders = Subset[subset];
        }
    }
    function addSubset(subset: SubsetEnum) {
        if (Subset[subset]) {
            placeholders = [...placeholders, ...Subset[subset]];
        }
    }

    return {
        run,
        sentence,
        encrypt,
        decrypt,
        decrypted,
        setSubset,
        addSubset,
    };
}
