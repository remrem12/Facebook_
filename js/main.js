const arr = ['name_user', 'name_title', 'text_about_p', 'from', 'live', 'school', 'job', 'follow', 'intro', 'link_mxh_1', 'link_mxh_2', 'head_bgd_img', 'profile_bgd_img', 'post_head', 'post_body', 'post_end', 'post_avt', 'post_title_me', 'post_title_you', 'post_title_number', 'post_time', 'post_status', 'post_firend_like', 'post_like', 'name_request'];

    GET_ACCOUNT = () => {
        var acc = document.forms['form_login']['acc'].value;
        var pass = document.forms['form_login']['pass'].value;
        console.log(acc, pass)
            if(acc == "tranduclinh" && pass == "123456") {
                window.open('home.html', '_top');
            }
            else if (acc == undefined || pass == undefined) {
                alert("Không thể bỏ trống 1 trong 2 thông tin trên.")
            }
            else {
                alert("Đăng nhập sai tài khoảng hoặc mật khẩu.")
            }
    }

    const getArr = () => {
        for(let i=0; i>arr.length; i++) {
            return arr[i] = document.getElementById("'"+a[i]+"'");
        }
    };
    getArr();

    let mouse_over_postBody = document.querySelector('#post_body');
    console.log(mouse_over_postBody);

    function tramAnh() {
        name_request.innerText = "Trâm Anh";
        name_user.innerText = "Trâm Anh";
        name_title.innerText = '" Hot Girl Dược Sĩ "';
        text_about_p.innerText = "Là một cô gái nhạy cảm với những điều xung quanh.";
        from.innerText = "Lai Thành, Thanh Hóa, Việt Nam";
        live.innerText = "Thủ đô Hà Nội, Việt Nam";
        school.innerText = "trường Cao Đẳng Dược Phú Thọ";
        job.innerText = "Dược sĩ bán thuốc";
        follow.innerText = "12.458.235 người";
        intro.innerText = "Nếu ai đó cho tôi làm lại từ đầu, tôi sẽ từ chối tình yêu dối trá từ anh.";
        link_mxh_1.innerText = "hotgirl_tramanh";
        link_mxh_2.innerText = "tramanh_xinhgai";
        post_title_me.innerText = "Trâm Anh";
        post_title_you.innerText = "Hoàng Anh";
        post_title_number.innerText = "895"
        post_time.innerText = "15 tháng 5 lúc 20:48 · Công khai";
        post_status.innerText = "Điều gì làm anh bất ngờ?";
        post_firend_like.innerText = "Hoàng Anh";
        post_like.innerText = "18.526.658";
        profile_bgd_img.style.background = 'url("./img/tram-anh-1-15399422000782094206671.png")'; 
        profile_bgd_img.insertAdjacentHTML('beforeEnd','<img src="' + './img/hotgirl-tram-anh-ava.jpg' + '">');
        post_head.insertAdjacentHTML('afterBegin','<img src="' + './img/hotgirl-tram-anh-ava.jpg' + '">');
    };

    function daSha() {
        name_request.innerText = "Dasha Taran";
        name_user.innerText = "Dasha Taran";
        name_title.innerText = '" Милая девушка "';
        text_about_p.innerText = "Яркая любовь все еще ярче, чем любовь в темноте";
        from.innerText = "Красивая русская деревня - Россия";
        live.innerText = "Москва - Rusia";
        school.innerText = "Русский университет";
        job.innerText = "модель";
        follow.innerText = "45.201.321 người";
        intro.innerText = "Невинные девушки всегда самые сбитые с толку золотые олени.";
        link_mxh_1.innerText = "Dasha_Taran";
        link_mxh_2.innerText = "Dasha_Taran";
        post_title_me.innerText = "Dasha Taran";
        post_title_you.innerText = "Hữu Thạch";
        post_title_number.innerText = "325"
        post_time.innerText = "21 tháng 5 lúc 00:48 · Công khai";
        post_status.innerText = "Bлюблю не смотреть";
        post_firend_like.innerText = "Hữu Thạch";
        post_like.innerText = "45.989.830";
        profile_bgd_img.style.background = 'url("./img/dasha.jpg")'; 
        profile_bgd_img.insertAdjacentHTML('beforeEnd','<img src="' + './img/c2.jpg' + '">');
        post_head.insertAdjacentHTML('afterBegin','<img src="' + './img/c2.jpg' + '">');
        post_body.style.backgroundImage = "url('./img/post_dasha.jpg')";

    };

    function thuyLinh() {
        name_request.innerText = "Hoàng Thùy Linh";
        name_user.innerText = "Hoàng Thùy Linh";
        name_title.innerText = '" Cô Pé Vàng Anh "';
        text_about_p.innerText = "Quá khứ mãi mãi là quá khú";
        from.innerText = "Thủ đô Hà Nội, Việt Nam";
        live.innerText = "Thủ đô Hà Nội, Việt Nam";
        school.innerText = "Cao đẳng nghệ thuật Hà Nội";
        job.innerText = "Ca sĩ, Diễn viên";
        follow.innerText = "41.210.231 người";
        intro.innerText = "Uống rượu say say rồi lại tỉnh, Yêu nhau vào tỉnh tỉnh rồi lại say .";
        link_mxh_1.innerText = "thuylinh_cute";
        link_mxh_2.innerText = "thuylinh_love";
        post_title_me.innerText = "Hoàng Thùy Linh";
        post_title_you.innerText = "Cường Tỏi";
        post_title_number.innerText = "120"
        post_time.innerText = "31 tháng 1 lúc 14:48 · Công khai";
        post_status.innerText = "Nếu ai hỏi tào lao về quá khứ, tôi sẽ gửi lá ngót đến tận nhà.";
        post_firend_like.innerText = "Cường Tỏi";
        post_like.innerText = "12.458.120";
        profile_bgd_img.style.background = 'url("./img/thuylinhb.jpg")'; 
        profile_bgd_img.insertAdjacentHTML('beforeEnd','<img src="' + './img/hqdefault.jpg' + '">');
        post_head.insertAdjacentHTML('afterBegin','<img src="' + './img/hqdefault.jpg' + '">');
        post_body.style.backgroundImage = "url('./img/postlinh.jpg')";

    };
