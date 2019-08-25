const hover_friends = document.querySelectorAll('#get_value>li');
let a = document.querySelectorAll('#get_value>li');
const requesr_friend = document.querySelector('#event_two'); //Table FRIENDS {YES/NO};


for(let i = 0; i<hover_friends.length; i++) {
    for(let j=0; j<=i; j++) {
        hover_friends[i].value = j;
    }
    hover_friends[i].addEventListener('mouseover', runListFriends, false);
    hover_friends[i].addEventListener('mouseout', runListFriends, true);
    function runListFriends (e) {
        if(e.type == 'mouseover'){
            requesr_friend.style.display = 'none';
            console.log(a[i].value);
            function create_event_two () {
                const event_one = document.getElementById('event_one');
                const create_infor_friends = document.createElement('div'); 
                const infor_friend_bgr = document.createElement('div');
                const infor_img_avt = document.createElement('img');
                const infor_control_name = document.createElement('div');
                const infor_your_name = document.createElement('h2');
                const infor_pseudonym_name = document.createElement('p');
                const information_friends = document.createElement('div');
                
                const information_friends_son = document.createElement('div');
                const information_timefriends_img = document.createElement('img');
                const information_timefriends_text = document.createElement('p');
                const information_friends_son_2 = document.createElement('div');
                const information_locationfriends_img = document.createElement('img');
                const information_locationfriends_text = document.createElement('p');

                const infor_bgr_footed = document.createElement('div');

                create_infor_friends.id = 'event_two_clone'; 
                infor_friend_bgr.id = 'infor_bgr_action'; // Background.
                infor_control_name.id = 'infor_name';

                information_timefriends_img.src = './img_thumbnail/handshake.png';
                information_locationfriends_img.src = './img_thumbnail/placeholder.png';
                
                information_friends.id = 'control_infor_friends';
                information_friends_son.id = 'control_infor_friends_son';
                information_friends_son_2.id = 'control_infor_friends_son_2';

                infor_bgr_footed.id = 'infor_footed';

                event_one.insertAdjacentElement('afterend', create_infor_friends);
                
                // console.log(get_infor_friends);
                create_infor_friends.appendChild(infor_friend_bgr);
                infor_friend_bgr.appendChild(infor_img_avt);

                create_infor_friends.appendChild(infor_control_name);
                infor_control_name.appendChild(infor_your_name);
                infor_control_name.appendChild(infor_pseudonym_name);

                create_infor_friends.appendChild(information_friends);
                information_friends.appendChild(information_friends_son);
                information_friends_son.appendChild(information_timefriends_img);
                information_friends_son.appendChild(information_timefriends_text);
                information_friends.appendChild(information_friends_son_2);
                information_friends_son_2.appendChild(information_locationfriends_img);
                information_friends_son_2.appendChild(information_locationfriends_text);

                create_infor_friends.appendChild(infor_bgr_footed);

                switch (a[i].value) {
                    case 0:
                        infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_chanh.jpg')";
                        infor_img_avt.src = './img_thumbnail/chanh.jpg'; // Avt.
                        infor_your_name.textContent = 'Minh Chánh'; // Name
                        infor_pseudonym_name.textContent = 'N_ắng'; // Title name
                        information_timefriends_text.textContent = 'Là bạn bè từ năm 2002.'; // long time friends
                        information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                        infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_chanh.jpg')";
                        break;
                    case 1:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_khang.jpg')";
                            infor_img_avt.src = './img_thumbnail/khang.jpg'; // Avt.
                            infor_your_name.textContent = 'Khang Hi'; // Name
                            infor_pseudonym_name.textContent = 'Cuộc sống là một ca khúc ...'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_khang.jpg')";
                            break;
                    case 2:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_phap.jpg')";
                            infor_img_avt.src = './img_thumbnail/phap.jpg'; // Avt.
                            infor_your_name.textContent = 'Anh Pha'; // Name
                            infor_pseudonym_name.textContent = 'Trần Lữ Lan Nhi <3'; // Title name
                            information_timefriends_text.textContent = 'Là bạn bè từ năm 2002.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_phap.jpg')";
                            break;
                    case 3:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_mi.jpg')";
                            infor_img_avt.src = './img_thumbnail/mi.jpg'; // Avt.
                            infor_your_name.textContent = 'Hồng Mi'; // Name
                            infor_pseudonym_name.textContent = 'Thế giới này màu gì nhỉ?'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_mi.jpg')";
                            break;
                    case 4:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_trang.jpg')";
                            infor_img_avt.src = './img_thumbnail/trang.jpg'; // Avt.
                            infor_your_name.textContent = 'Tran Thuy Trang'; // Name
                            infor_pseudonym_name.textContent = '👱🏻‍👱🏻‍Be you - Be cool💋💋'; // Title name
                            information_timefriends_text.textContent = 'Đối tác với nhau từ năm 2019.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ thủ đô Hà Nội.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_trang.jpg')";
                    break;
                    case 5:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_my.jpg')";
                            infor_img_avt.src = './img_thumbnail/my.jpg'; // Avt.
                            infor_your_name.textContent = 'Nguyễn Hoàng My'; // Name
                            infor_pseudonym_name.textContent = 'Mọi thứ đều sẽ ổn cã thôi'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_my.jpg')";
                    break;
                    case 6:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_linh.jpg')";
                            infor_img_avt.src = './img_thumbnail/linh.jpg'; // Avt.
                            infor_your_name.textContent = 'Diệu Linh'; // Name
                            infor_pseudonym_name.textContent = 'Tôi thích nghe mọi người nói về tôi'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2015.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_linh.jpg')";
                    break;
                    case 7:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_ha.jpg')";
                            infor_img_avt.src = './img_thumbnail/ha.jpg'; // Avt.
                            infor_your_name.textContent = 'Nguyễn Thanh Hà'; // Name
                            infor_pseudonym_name.textContent = ' '; // Title name
                            information_timefriends_text.textContent = 'Trở thành bạn bè từ 2002.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_ha.jpg')";
                    break;
                    case 8:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_duyen.jpg')";
                            infor_img_avt.src = './img_thumbnail/duyen.jpg'; // Avt.
                            infor_your_name.textContent = 'Phan Duyên'; // Name
                            infor_pseudonym_name.textContent = 'Sóc Nâu'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_duyen.jpg')";
                        break;
                        case 9:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_ly.jpg')";
                            infor_img_avt.src = './img_thumbnail/ly.jpg'; // Avt.
                            infor_your_name.textContent = 'Pé Ly'; // Name
                            infor_pseudonym_name.textContent = 'Lười'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2017.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ thành phố Đắk Lắk.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_ly.jpg')";
                        break;
                        case 10:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_tram.jpg')";
                            infor_img_avt.src = './img_thumbnail/tram.jpg'; // Avt.
                            infor_your_name.textContent = 'Thu Trâm'; // Name
                            infor_pseudonym_name.textContent = ''; // Title name
                            information_timefriends_text.textContent = '...'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_tram.jpg')";
                    break;
                    case 11:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_hau.jpg')";
                            infor_img_avt.src = './img_thumbnail/hau.jpg'; // Avt.
                            infor_your_name.textContent = 'Phúc Hậu'; // Name
                            infor_pseudonym_name.textContent = 'Không có thanh công khi bạn chưa thử.'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2017'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_hau.jpg')";
                    break;
                    case 12:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_quyen.jpg')";
                            infor_img_avt.src = './img_thumbnail/quyen.jpg'; // Avt.
                            infor_your_name.textContent = 'Nguyễn Ngọc Quyên'; // Name
                            infor_pseudonym_name.textContent = 'Nắng hơn chữ NẮNG'; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_quyen.jpg')";
                    break;
                    case 13:
                            infor_friend_bgr.style.backgroundImage = "url('./img_thumbnail/bgr_hoa.jpg')";
                            infor_img_avt.src = './img_thumbnail/hoa.jpg'; // Avt.
                            infor_your_name.textContent = 'Nguyễn Thị Hòa'; // Name
                            infor_pseudonym_name.textContent = ''; // Title name
                            information_timefriends_text.textContent = 'Bạn bè với nhau từ năm 2009.'; // long time friends
                            information_locationfriends_text.textContent = 'Đến từ Ninh Hòa-Khánh Hòa.'; // Location friends
                            infor_bgr_footed.style.background = "linear-gradient(to top, transparent, #fff)," + "url('./img_thumbnail/footed_hoa.jpg')";
                    break;
                    default:
                        break;
                }
            }
            create_event_two();
            }
            else if((e.type != 'mouseover')) {
                requesr_friend.style.backgroundColor = '#fff';
                requesr_friend.style.display = 'block';
                const eventTwoClone = document.querySelector('#event_two_clone'); //Table FRIENDS {YES/NO};
                eventTwoClone.style.display = 'none';

            }
        }
}