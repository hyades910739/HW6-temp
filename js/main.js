//ver. 1.09487.4269487 
//date:2016.6.9.fucking 7am in the morning

var config = {
  apiKey: "AIzaSyD9ATde7lNJJ3ICadVDG274J3NH5_6DsXY",
  authDomain: "jiiiiiiiiii.firebaseapp.com",
  databaseURL: "https://jiiiiiiiiii.firebaseio.com",
  storageBucket: "project-779064556320146216.appspot.com",
};
firebase.initializeApp(config);
ImageDealer.REF = firebase;
var currentUser ;




/*
    分為三種使用情形：
    1. 初次登入，改變成登入狀態
    2. 已為登入狀態，reload 網站照樣顯示登入狀態
    3. 未登入狀態

    登入/當初狀態顯示可使用下方 logginOption function
*/

//我要開始寫code6666
var fbProvider = new firebase.auth.FacebookAuthProvider();
new Firebase("https://jiiiiiiiiii.firebaseio.com/items");
var items = firebase.database().ref("items");



//signin
$("#signin").click(function () {
  firebase.auth().signInWithPopup(fbProvider).then(function(result){
    currentUser.displayName = result.user.displayName;
    currentUser.uid = result.user.uid;
    currentUser.photoURL = result.user.photoURL;
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessa = error.message;
    console.log(errorCode, errorMessa);
  });  
  logginOption(true);
  firebase.database().ref("items").once("value",reProduceAll);
});

//signout
$("#signout").click(function () {
    firebase.auth().signOut().then(function(){
    }, function(error){
      console.log(error.code);
    })  
});



//
//
var nowItem = "";
//
//

$("#submitData").click(function () {
      var dataArr = $("#item-info").serializeArray();
  var picFile = $("#picData")[0].files[0];
  var picTrans = new FileReader();
  if (dataArr[0].value != null && dataArr[1].value != null && dataArr[2].value != null && picFile ) {
    //check if it is picture(not yet)

    picTrans.readAsDataURL(picFile);
    picTrans.onloadend = (function (imge) {return function (e) {
        imge.src = e.target.result;
        saveItems(dataArr[0].value, dataArr[1].value, dataArr[2].value, e.target.result);
    }})(picFile);
    $("#upload-modal").modal('hide');
  }

});

$("#editData").click(function (event) {
  var dataArr = $("#item-info").serializeArray();
  var picFile = $("#picData")[0].files[0];
  var picTrans = new FileReader();
  if (dataArr[0].value != null && dataArr[1].value != null && dataArr[2].value != null && picFile ) {
    //check if it is picture(not yet)

    picTrans.readAsDataURL(picFile);
    picTrans.onloadend = (function (imge) {return function (e) {
        imge.src = e.target.result;
        updateItem(dataArr[0].value, parseInt(dataArr[1].value), dataArr[2].value, e.target.result);
    }})(picFile);
    $("#upload-modal").modal('hide');
  }
});


$("#removeData").click(function () {
     firebase.database().ref("items").remove();
})


/*
    商品按鈕在dropdown-menu中
    三種商品篩選方式：
    1. 顯示所有商品
    2. 顯示價格高於 NT$10000 的商品
    3. 顯示價格低於 NT$9999 的商品

*/

$('#all').click(function showAllItems(){
  firebase.database().ref("items").once("value",reProduceAll);
});

$('#10000up').click(function showExpItems(){
  firebase.database().ref("items").orderByChild("price").startAt(10000).once("value",reProduceAll);
});

$('#9999down').click(function showCheapItems(){
  firebase.database().ref("items").orderByChild("price").endAt(9999).once("value",reProduceAll);
});
//





function logginOption(isLoggin) {
  if (isLoggin) {
    $("#upload").css("display","block");
    $("#signin").css("display","none");
    $("#signout").css("display","block");
  }else {
    $("#upload").css("display","none");
    $("#signin").css("display","block");
    $("#signout").css("display","none");
  }
}


function reProduceAll(allItems) {
    /*
    清空頁面上 (#item)內容上的東西。
    讀取爬回來的每一個商品
    */

  /*
    利用for in存取
  */
  for (var  in ) {

    produceSingleItem();
  }

}
// 每點開一次就註冊一次
function produceSingleItem(sinItemData){
  /*
    抓取 sinItemData 節點上的資料。
    若你的sinItemData資料欄位中並沒有使用者名稱，請再到user節點存取使用者名稱
    資料齊全後塞進item中，創建 Item 物件，並顯示到頁面上。
  */

  firebase.database().ref().once("",function () {
    $("#items").append();

      /*
        用 ViewModal 填入這筆 item 的資料
        呼叫 ViewModal callImage打開圖片
        創建一個 MessageBox 物件，將 Message 的結構顯示上 #message 裡。
      */



      $("#message").append();

      /*
        判斷使用者是否有登入，如果有登入就讓 #message 容器顯示輸入框。
        在 MessageBox 上面註冊事件，當 submit 時將資料上傳。
      */

      if (currentUser) {
        $("#message").append(messBox.inputBox);

        messBox.inputBox.keypress(function (e) {
          if (e.which == 13) {
            e.preventDefault();

            /*
            取得input的內容 $(this).find("#dialog").val();
            清空input的內容 $(this).find("#dialog").val("");
            */

          }
        });
      }

    /*
    從資料庫中抓出message資料，並將資料填入MessageBox
    */

      firebase.database().ref().orderBy.("",function(data) {

      });
    });

    /*
    如果使用者有登入，替 editBtn 監聽事件，當使用者點選編輯按鈕時，將資料顯示上 uploadModal。
    */

  })
}

function generateDialog(diaData, messageBox) {


}





