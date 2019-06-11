function getPeople () {

    const arr = ['name_user', 'name_title', 'text_about_p', 'from', 'live', 'school', 'job', 'follow', 'intro', 'link_mxh_1', 'link_mxh_2', 'head_bgd_img', 'profile_bgd_img'];

    const getArr = () => {
        for(let i=0; i>arr.length; i++) {
            return arr[i] = document.getElementById("'"+a[i]+"'");
        }
    };

    name_user.innerText = "Trâm Anh";
    name_title.innerText = '" Hot Girl Dược Sĩ "';
    text_about_p.innerText = "Bạn có thấy nốt ruồi đen hông nè :v";
    from.innerText = "Lai Thành, Thanh Hóa, Việt Nam";
    live.innerText = "Thủ đô Hà Nội, Việt Nam";
    school.innerText = "trường Cao Đẳng Dược Phú Thọ";
    job.innerText = "Dược sĩ bán thuốc";
    follow.innerText = "12.458.235 người";
    intro.innerText = "Tình yêu thoáng rồi đi. Tiền tài và danh vọng chã làm được gì. Lộ clip rồi thì xóa sao cho được.";

    profile_bgd_img.style.background = 'url("../img/tram-anh-1-15399422000782094206671.png")'; 
    profile_bgd_img.insertAdjacentHTML('beforeEnd','<img src="' + '../img/hotgirl-tram-anh-ava.jpg' + '">');

    getArr();
}
getPeople();