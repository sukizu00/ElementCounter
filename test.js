clickAll = function () {
    var a = document.querySelectorAll("button");
    // console.log(a);
    for (i of a) {
        i.addEventListener("click", function (event) {
            var doituong = event.target;
            // Kiểm tra xem button vừa nhấn là buton a, b hay c  tra ve bien kieunutnhan
            var classList = Array.from(doituong.classList);
            var kieunutnhan = "";
            for (var kiemtra of ["a", "b", "c"]) {
                if (classList.indexOf(kiemtra) > -1) {
                    kieunutnhan = kiemtra;
                }
            }
            // Tạo một div tương ứng với div.a, div.b, div.c
            var newdiv = document.createElement("div");
            newdiv.classList.add(kieunutnhan);

            // Thêm div này vào div.container
            var wrapper = doituong.closest("div.clickWrapper");
            var container = wrapper.querySelector("div.clickContainer");
            container.appendChild(newdiv);
            // Tính tổng số Tag
            var tongsotag = container.querySelectorAll("." + kieunutnhan).length;
            // Show Total Tag lên span tương ứng span.a, span.b, span.c
            var span = wrapper.querySelector("div.clickInfo span." + kieunutnhan);
            span.innerHTML = String(tongsotag);
        });
    }
    return this;
};

