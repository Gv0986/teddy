const text =
"Hello sweetheart 💋 it's....11:11....time for a wish....yrr bhout miss kar raha hu aapko ...haa apne Kami thodi thodi puri ki .. photo's and videos bhej bhej k but still yrr physically milna hai aapse aapko hug karna hai kiss karna hai or ...😁😁..ha ha vahi aabhi ayega apke mun me voh bhi chahiye... missing them also ...chalo aab sharama lo or baad me gpp bol dena ...😅😅....but yr sachi ....milno na mujhse aapko dikhata hu kitna miss kar raha hu aapko ....and yrr sorry evening k liye return nahi karunga kabhi vaise nahi bolunga bus yrr gussa aa gaya tha aapka voh nishan dekk ....k ...nahi huva control toh bol diya ....ek baat bolu 😁😁gussa mut karna dekho mene bhale he bhout baar sorry bola but na ..mai meri jagah sahi hu mujhe aisa lagta hai ...kyunki meri jaan ki taklif mai nahi dekh sakta ....bhale he voh app logo ki masti thi but mujhe usme pain dikhai diya ...mera gussa laajmi tha ....or na yrr aap hus kaise rahe the yrr Mera voh sapna sunn k☹️ ...ai shapat meri nind udd gai thi raatme .... literally yrr mai apne sapne me roo raha tha aapko pakad k 😫...aai shapat jub mere dada ne mujhe utha diya na raatme mujhe bhout sukoon mila ki yrr sapna tha ....she is with me 🥺...i really love you mam ...you are the only one I've now ... please aise bich me mut jana chodke kabhi ...sahen nahi kar paunga .... maalum dost bula rahe the  party k liye call aya tha toh charche nashe ke chal rahe the , main zikr tumhare nighahon ka kar aaya....or jub saalo ne baat sukoon ki chedi ...mai baat tumhari baahon ka kar aya .... Kasam se nashe jada sukoon milta hai ji aapki baahon me 🥺....haa voh alag baat hai gaali deke saalo ne phone kaat diya 😅but jaane do pina he kisko tha ... vaise chalo mam itna nahi likhta aaj dusre kaam me busy hu halka ...and and  aap bhout sunder lug rahe ho mam tikka laga lo Nazar na lage mere bache ko ....at last wish 😁..hanji mam aap ho mere mai janta hu pyar sirf mujhse he karte ho yeh bhi manta hu ...thodi si meri baat manogi kya ..khudko mere naam se jaano gi kya ...log hazaro ki bhid me gaurav pukare GE...tum unme khudko pahechanogi kya .... indirectly bolu toh mam bus wahi same line thoda sa or khudko mere naam karogi kya ....i love you the most baallllll💜💕"
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
