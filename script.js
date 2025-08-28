// funtinality-01

const icons = document.getElementsByClassName('heart-icon')
console.log(icons);

for (const icon of icons) {
    icon.addEventListener('click', function () {
        
        const nav = parseInt(document.getElementById('heart-tittle').innerText);
        const cureentNav = nav + 1;
        document.getElementById('heart-tittle').innerText = cureentNav;
    })
}


const transactionData = [];
// cart-01
document.getElementById('call-1').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');

    // কয়েনের মান বের করো
    const tk = parseInt(document.getElementById('coin').innerText);

    // আগে চেক করো ব্যালেন্স আছে কিনা
    if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }

    // কয়েন আপডেট করো
    const current = tk - 20;
    document.getElementById('coin').innerText = current;

    // কলিং এলার্ট
    alert('📞 calling National Emergency Number 999..');

    // নতুন ডাটা অ্যাড করো
    const data = {
        info:999,
        name: 'National Emergency',
        date: new Date().toLocaleTimeString() // সঠিক মেথড
    };
    transactionData.push(data);

    // কার্ট কন্টেইনার ক্লিয়ার করো, নতুন লিস্ট তৈরি করো
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// // cart-02
document.getElementById('call-2').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Police 999..');

    
    const data = {
        info:999,
        name: 'police',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-3
document.getElementById('call-3').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Fire Service 999..');

    
    const data = {
        info:999,
        name: 'Fire Service',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-4
document.getElementById('call-4').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Ambulance 1994-999999');

    
    const data = {
        info: 1994-999999,
        name: 'Ambulance',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-5
document.getElementById('call-5').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Women & Child Helpline 109');

    
    const data = {
        info: 109,
        name: 'Women & Child Helpline',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-6
document.getElementById('call-6').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Anti-Corruption 106');

    
    const data = {
        info: 106,
        name: 'Anti-Corruption',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-7
document.getElementById('call-7').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Electricity Outage 16216');

    
    const data = {
        info: 16216,
        name: 'Electricity Outage',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-8
document.getElementById('call-8').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Brac 16445');

    
    const data = {
        info: 16445,
        name: 'Brac',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});
// call-9
document.getElementById('call-9').addEventListener('click', function () {
    const cartContainer = document.getElementById('cart-container');
   const tk = parseInt(document.getElementById('coin').innerText);
      if (tk < 20) {
        alert('Invalid! পর্যাপ্ত কয়েন নেই।');
        return;
    }
     const current = tk - 20;
    document.getElementById('coin').innerText = current;

  
    alert('📞 calling Bangladesh Railway 163');

    
    const data = {
        info: 163,
        name: 'Bangladesh Railway',
        date: new Date().toLocaleTimeString() 
    };
    transactionData.push(data);

   
    cartContainer.innerHTML = '';
    for (const item of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex bg-gray-100 justify-between p-3 rounded-2xl gap-1 mt-5">
                <div>
                    <h1 class="font-bold">${item.name}</h1>
                    <p>${item.info}</p>
                </div>
                <p>${item.date}</p>
            </div>
        `;
        cartContainer.append(div);
    }
});

// // clear btn-functinality
const btnClear=document.getElementById('btn-clear').addEventListener('click', function(){
     const cartContainer = document.getElementById('cart-container');
     cartContainer.innerHTML='';     

})


// copy btn Funtinality---->
// copy-01
document.getElementById('copy-1').addEventListener('click', function(){
    alert('copy number 999')
        const textCopy=document.getElementById('number-1').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-2
document.getElementById('copy-2').addEventListener('click', function(){
    alert('copy number 999')
        const textCopy=document.getElementById('number-1').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// cart-3
document.getElementById('copy-3').addEventListener('click', function(){
    alert('copy number 999')
        const textCopy=document.getElementById('number-1').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// cart-04
document.getElementById('copy-4').addEventListener('click', function(){
    alert('copy number 1994-999999')
        const textCopy=document.getElementById('number-4').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-05
document.getElementById('copy-5').addEventListener('click', function(){
    alert('copy number 109')
        const textCopy=document.getElementById('number-5').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-6
document.getElementById('copy-6').addEventListener('click', function(){
    alert('copy number 106')
        const textCopy=document.getElementById('number-6').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-7
document.getElementById('copy-7').addEventListener('click', function(){
    alert('copy number 16216')
        const textCopy=document.getElementById('number-7').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-8
document.getElementById('copy-8').addEventListener('click', function(){
    alert('copy number 16445')
        const textCopy=document.getElementById('number-8').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})
// copy-9
document.getElementById('copy-9').addEventListener('click', function(){
    alert('copy number 163')
        const textCopy=document.getElementById('number-9').innerText

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert('Copied: ' + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
        const navCopy=parseInt(document.getElementById('copy-nav').innerHTML)

        const currentCopy= navCopy +1 ;
        document.getElementById('copy-nav').innerHTML=currentCopy
   
})

