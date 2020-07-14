const getBtn=document.getElementById('get-btn');

const postBtn=document.getElementById('post-btn');



// eve.holt@reqres.in
// cityslicka


const sendHTTPRequest=( method,url,data) =>{
    const promise=new Promise((resolve,reject) =>{

    

    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType='json';

    if(data){
        xhr.setRequestHeader('content-Type','aplication/json');
    }

    xhr.onload = () => {
        // const data =JSON.parse(xhr.response);
        // console.log(data.data[0].email);

        if(xhr.status >= 400){
            reject(xhr.response);
        }else{
        resolve(xhr.response);
        }
    };

    xhr.onerror = () => {
        reject('sometging went wrong');
    };

    

    xhr.send(JSON.stringify(data));
    
});
return promise;

};

const getData=()=>{
    sendHTTPRequest('GET','https://reqres.in/api/users').then(responseData =>{
        console.log(responseData);
        
    });

};


const postData=()=>{
        
    const userEmail=document.getElementById('InputEmail').value;

    const userPasword=document.getElementById('InputPassword1').value;


    sendHTTPRequest('POST',"https://reqres.in/api/users",{
        email:userEmail,
        password:userPasword
        // id:userEmail,
        // year:userPasword
    }).then(responseData => {
        console.log(responseData);
        
        


    }).catch(err => {
        console.log(err.error);

    });

};




getBtn.addEventListener('click',getData);

postBtn.addEventListener('click',postData);

