// function getPeople () {

    const arr = ['name_user', 'name_title', 'text_about_p', 'from', 'live', 'school', 'job', 'follow', 'intro', 'link_mxh_1', 'link_mxh_2', 'head_bgd_img', 'profile_bgd_img', 'post_head', 'post_body', 'post_end', 'post_avt', 'post_title_me', 'post_title_you', 'post_title_number', 'post_time', 'post_status', 'post_firend_like', 'post_like', 'name_request', 'get_tramAnh', 'get_daSha', 'get_thuyLinh'];
    const getArr = () => {
        for(let i=0; i>arr.length; i++) {
            return arr[i] = document.getElementById("'"+a[i]+"'");
        }
    };
    getArr();

// 

    var tram_anh = document.getElementById('get_tramAnh');
    var da_Sha= document.getElementById('get_daSha');

    // da_Sha.onclick = daSha();
    // tram_anh.onload = tramAnh();
    
    
    window.onload = daSha;


    function tramAnh() {
        name_request.innerText = "Trâm Anh";
        name_user.innerText = "Trâm Anh";
        name_title.innerText = '" Hot Girl Dược Sĩ "';
        text_about_p.innerText = "Bạn có thấy nốt ruồi đen hông nè :v";
        from.innerText = "Lai Thành, Thanh Hóa, Việt Nam";
        live.innerText = "Thủ đô Hà Nội, Việt Nam";
        school.innerText = "trường Cao Đẳng Dược Phú Thọ";
        job.innerText = "Dược sĩ bán thuốc";
        follow.innerText = "12.458.235 người";
        intro.innerText = "Tình yêu thoáng rồi đi. Tiền tài và danh vọng chã làm được gì. Lộ clip rồi thì xóa sao cho được.";
        link_mxh_1.innerText = "hotgirl_tramanh";
        link_mxh_2.innerText = "tramanh_xinhgai";
        post_title_me.innerText = "Trâm Anh";
        post_title_you.innerText = "Hoàng Anh";
        post_title_number.innerText = "895"
        post_time.innerText = "15 tháng 5 lúc 20:48 · Công khai";
        post_status.innerText = "Bất ngờ chưa nè các bạn :)";
        post_firend_like.innerText = "Hoàng Anh";
        post_like.innerText = "18.526.658";

        // anh bia
        profile_bgd_img.style.background = 'url("../img/tram-anh-1-15399422000782094206671.png")'; 
        // avt
        profile_bgd_img.insertAdjacentHTML('beforeEnd','<img src="' + '../img/hotgirl-tram-anh-ava.jpg' + '">');
        post_head.insertAdjacentHTML('afterBegin','<img src="' + '../img/hotgirl-tram-anh-ava.jpg' + '">');
    };

    function daSha() {
        name_request.innerText = "asdasd"
        name_user.innerText = "Trâm Aasdasdnh";
    };
    // window.onload = daSha;

// }
// getPeople();