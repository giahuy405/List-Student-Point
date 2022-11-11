function domID(id) {
    return document.getElementById(id);
}
var tblBody = domID('tblBody');
// khai báo 1 mảng rỗng danh sách điểm sinh viên 
var listPoint = [];
// tạo hàm lấy điểm từ table 

function getPointFromTable() {
    for (var i = 0; i < tblBody.rows.length; i++) {
        // gắn thêm innerHTML để lấy đúng giá trị ta cần, *1 để đổi string thành number
        var point = tblBody.rows[i].cells[3].innerHTML * 1;
        listPoint.push(point);
    }
}
// gọi hàm ra 
getPointFromTable();
// console để check xem đã có listPoint chưa
console.log(listPoint);


domID('btnSVCaoDiemNhat').onclick = function () {
    var max = listPoint[0];
    var index = 0;
    for (var i = 0; i < listPoint.length; i++) {
        if (max < listPoint[i]) {
            max = listPoint[i];
            index = i;
        }
    }
    domID('svGioiNhat').innerHTML = tblBody.rows[index].cells[2].innerHTML + ' : ' + max;
}

domID('btnSVThapDiemNhat').onclick = function () {
    var min = listPoint[0];
    var index = 0;
    for (var i = 0; i < listPoint.length; i++) {
        if (min > listPoint[i]) {
            min = listPoint[i];
            index = i;
        }
    }
    domID('svYeuNhat').innerHTML = tblBody.rows[index].cells[2].innerHTML + ' : ' + min;
}


// điểm lớn hơn 8 là học sinh giỏi
domID('btnSoSVGioi').onclick = function () {
    var count = 0;
    for (var i = 0; i < listPoint.length; i++) {
        if (listPoint[i] > 8) {
            count++;
        }
    }
    domID('soSVGioi').innerHTML = count;
}

domID('btnSVDiemHon5').onclick = function () {
    var content = '';
    for (var i = 0; i < listPoint.length; i++) {
        if (listPoint[i] > 5) {
            content += tblBody.rows[i].cells[2].innerHTML + ' : ' + tblBody.rows[i].cells[3].innerHTML + '<br>';
        }
    }
    domID('dsDiemHon5').innerHTML = content;
}


// sắp xếp tăng
domID('btnSapXepTang').onclick = function () {
    for (var i = 0; i < listPoint.length - 1; i++) {
        for (var j = i + 1; j < listPoint.length; j++) {
            if (listPoint[i] > listPoint[j]) {
                var temp = listPoint[i];
                listPoint[i] = listPoint[j];
                listPoint[j] = temp;
            }
        }
    }
    domID('dtbTang').innerHTML = listPoint;
}