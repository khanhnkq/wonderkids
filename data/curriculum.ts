import { Lesson } from '../types';
import { Language } from '../types/i18n';

export const curriculumVi: Lesson[] = [
    // --- Age Group 6-8: Foundation (Body & Safety) ---
    {
        id: 'l6-m1',
        title: 'Cơ thể của em',
        description: 'Nhận diện và tôn trọng cơ thể của mình. Mỗi người đều khác biệt và đặc biệt.',
        ageGroup: '6-8',
        duration: '3 phút',
        thumbnail: '/images/body_parts.png',
        category: 'Body',
        content: {
            introduction: 'Chào con! Hôm nay chúng ta sẽ cùng khám phá một công trình tuyệt đẹp, đó chính là cơ thể của con đấy!',
            mainPoints: [
                {
                    title: 'Các bộ phận cơ thể',
                    text: 'Cơ thể chúng ta có Đầu, Tay, Chân, Ngực và những vùng đặc biệt khác. Chúng ta cần gọi tên đúng của chúng nhé.',
                    image: '/images/body_parts.png'
                },
                {
                    title: 'Cơ thể là của con',
                    text: 'Không ai có quyền làm tổn thương cơ thể con. Con là người chủ sở hữu duy nhất của cơ thể mình.',
                    image: '/images/my_body_autonomy.png'
                }
            ],
            interactive: {
                question: 'Đây là tay hay chân?',
                options: ['Tay', 'Chân', 'Đầu', 'Bụng'],
                correctAnswer: 0,
                explanation: 'Đúng rồi! Cánh tay giúp chúng ta cầm nắm, ôm ấp và làm việc. Hãy yêu quý đôi tay của mình nhé!'
            }
        }
    },
    {
        id: 'l6-m2',
        title: 'Vùng riêng tư',
        description: 'Hiểu về vùng riêng tư và ranh giới an toàn của cơ thể.',
        ageGroup: '6-8',
        duration: '4 phút',
        thumbnail: '/images/swimsuit.png',
        category: 'Body',
        content: {
            introduction: 'Tại sao chúng ta lại mặc đồ bơi khi đi biển? Cùng tìm hiểu về bí mật của vùng đồ bơi nhé.',
            mainPoints: [
                {
                    title: 'Vùng đồ bơi là gì?',
                    text: 'Đó là những bộ phận được che chắn bởi đồ bơi. Đó là "Vùng riêng tư".',
                    image: '/images/swimsuit.png'
                },
                {
                    title: 'Quy tắc Không được chạm',
                    text: 'Không ai được phép nhìn hay chạm vào vùng riêng tư của con, trừ bác sĩ khi khám bệnh (có ba mẹ) hoặc ba mẹ khi giúp con vệ sinh (khi con còn nhỏ).',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'Nếu ai đó muốn xem vùng đồ bơi của con, việc đó có Ổn không?',
                options: ['Rất ổn', 'Bình thường', 'Không ổn chút nào', 'Vui vẻ đồng ý'],
                correctAnswer: 2,
                explanation: 'Chính xác! Đó là hành động KHÔNG ỔN (Not OK). Con có quyền nói KHÔNG và kể ngay với người lớn tin cậy.'
            }
        }
    },
    {
        id: 'l6-m3',
        title: 'Chạm an toàn & Không an toàn',
        description: 'Phân biệt những cái chạm khiến ta vui vẻ và những cái chạm khiến ta khó chịu.',
        ageGroup: '6-8',
        duration: '4 phút',
        thumbnail: '/images/safe_touch.png',
        category: 'Safety',
        content: {
            introduction: 'Con cảm thấy thế nào khi được mẹ ôm? Và khi bị ai đó cấu véo? Cảm xúc của con rất quan trọng.',
            mainPoints: [
                {
                    title: 'Chạm an toàn',
                    text: 'Là cái bắt tay với bạn, cái ôm của bố mẹ, hay bác sĩ khám bệnh. Nó làm con thấy thoải mái và an toàn.',
                    image: '/images/safe_touch.png'
                },
                {
                    title: 'Chạm không an toàn',
                    text: 'Là khi ai đó làm con đau, sợ hãi, khó chịu hoặc bắt con giữ bí mật về cái chạm đó.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'Một người lạ muốn ôm và thơm con, con cảm thấy thế nào?',
                options: ['Vui vẻ', 'Thoải mái', 'Khó chịu và không muốn', 'Bình thường'],
                correctAnswer: 2,
                explanation: 'Đúng rồi. Nếu con thấy khó chịu, con không bắt buộc phải ôm họ. Hãy từ chối một cách lịch sự hoặc tránh xa.'
            }
        }
    },
    {
        id: 'l6-m4',
        title: 'Dũng cảm nói KHÔNG',
        description: 'Học cách từ chối và tìm kiếm sự giúp đỡ khi gặp tình huống không an toàn.',
        ageGroup: '6-8',
        duration: '5 phút',
        thumbnail: '/images/say_no.png',
        category: 'Safety',
        content: {
            introduction: 'Siêu nhân cũng cần đồng đội. Khi gặp nguy hiểm, con hãy dùng "3 bước bảo vệ" này nhé.',
            mainPoints: [
                {
                    title: '3 Bước bảo vệ',
                    text: '1. Nói KHÔNG thật to. \n2. Rời đi ngay lập tức. \n3. Kể lại với người lớn tin cậy.',
                    image: '/images/say_no.png'
                },
                {
                    title: 'Ai là người tin cậy?',
                    text: 'Họ là Bố mẹ, Ông bà, Thầy cô giáo. Hãy kể cho họ nghe bất cứ điều gì làm con lo lắng.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'Nếu ai đó làm con sợ, con sẽ chọn nói câu nào?',
                options: ['Không nói gì cả', 'Dừng lại ngay!', 'Cảm ơn ạ', 'Cháu thích lắm'],
                correctAnswer: 1,
                explanation: 'Rất dũng cảm! "Dừng lại ngay!" hoặc "Cháu không thích!" là câu thần chú bảo vệ con. Sau đó hãy chạy đi tìm người lớn nhé.'
            }
        }
    },
    {
        id: 'l6-m5',
        title: 'Bí mật Tốt & Bí mật Xấu',
        description: 'Không phải bí mật nào cũng nên giữ kín. Hãy học cách phân biệt chúng.',
        ageGroup: '6-8',
        duration: '4 phút',
        thumbnail: '/images/secrets.png',
        category: 'Emotion',
        content: {
            introduction: 'Suỵt! Con có thích bí mật không? Có những bí mật mang lại niềm vui, nhưng cũng có những bí mật làm mình lo lắng.',
            mainPoints: [
                {
                    title: 'Bí mật Tốt',
                    text: 'Là món quà sinh nhật bất ngờ cho mẹ, hay trò chơi trốn tìm. Nó làm mọi người vui vẻ.',
                    image: '/images/first_crush.png'
                },
                {
                    title: 'Bí mật Xấu',
                    text: 'Là khi ai đó dặn con "đừng kể với bố mẹ", hoặc làm con cảm thấy buồn, sợ hãi. Những bí mật này KHÔNG BAO GIỜ được giữ kín.',
                    image: '/images/secrets.png'
                }
            ],
            interactive: {
                question: 'Nếu ai đó cho con xem hình ảnh lạ và dặn "đừng nói với mẹ", đó là bí mật loại nào?',
                options: ['Bí mật Tốt', 'Bí mật Tuyệt vời', 'Bí mật Xấu (Cần kể ngay)', 'Bí mật Vui vẻ'],
                correctAnswer: 2,
                explanation: 'Chính xác! Đó là bí mật xấu vì nó ép buộc con phải giấu giếm bố mẹ. Hãy kể ngay cho mẹ nghe nhé, mẹ sẽ không mắng con đâu.'
            }
        }
    },

    // --- Age Group 9-11: Awareness (Pre-puberty) ---
    {
        id: 'l9-m1',
        title: 'Cơ thể đang lớn lên',
        description: 'Hiểu rằng cơ thể mỗi người sẽ thay đổi theo cách riêng.',
        ageGroup: '9-11',
        duration: '5 phút',
        thumbnail: '/images/growth_puberty.png',
        category: 'Body',
        content: {
            introduction: 'Chào các bạn! Có bao giờ bạn soi gương và thấy mình khác hẳn năm ngoái không? Đó là hành trình lớn lên kỳ diệu!',
            mainPoints: [
                {
                    title: 'Mỗi bông hoa nở một cách riêng',
                    text: 'Cơ thể chúng ta cũng giống như cây cối, có bạn cao nhanh, có bạn cao chậm. Không ai giống ai và điều đó hoàn toàn bình thường.',
                    image: '/images/growth_puberty.png'
                },
                {
                    title: 'Không so sánh',
                    text: 'Đừng lo lắng nếu mình chưa cao bằng bạn bè. Hãy ăn uống đủ chất và vận động, cơ thể bạn sẽ phát triển đúng lộ trình của nó.',
                    image: '/images/body_parts.png'
                }
            ],
            interactive: {
                question: 'Nếu bạn thấy mình thấp hơn các bạn cùng lớp, bạn nên nghĩ gì?',
                options: ['Mình thật kém cỏi', 'Mình bị bệnh rồi', 'Mỗi người lớn lên theo cách riêng, mình vẫn ổn', 'Uống thuốc tăng trưởng ngay'],
                correctAnswer: 2,
                explanation: 'Tuyệt vời! Mỗi người có một lộ trình phát triển riêng. Hãy yêu thương cơ thể mình nhé.'
            }
        }
    },
    {
        id: 'l9-m2',
        title: 'Cảm xúc & Tình bạn',
        description: 'Gọi tên những cảm xúc phức tạp và học cách tôn trọng bạn bè.',
        ageGroup: '9-11',
        duration: '5 phút',
        thumbnail: '/images/emotions_complex.png',
        category: 'Emotion',
        content: {
            introduction: 'Đôi khi chúng ta cảm thấy vui, buồn, ghen tị lẫn lộn. Làm sao để hiểu "bảng màu" cảm xúc này?',
            mainPoints: [
                {
                    title: 'Cảm xúc phức tạp',
                    text: 'Lớn lên đồng nghĩa với việc chúng ta có nhiều cảm xúc hơn: ngại ngùng, hồi hộp, hay một chút ghen tị. Không sao cả, hãy hít thở sâu và gọi tên chúng.',
                    image: '/images/emotions_complex.png'
                },
                {
                    title: 'Tôn trọng cảm xúc',
                    text: 'Bạn bè cũng có những lúc buồn vui thất thường. Hãy lắng nghe và tôn trọng cảm xúc của họ.',
                    image: '/images/first_crush.png'
                }
            ],
            interactive: {
                question: 'Khi thấy bạn thân buồn vì bị điểm kém, mình nên làm gì?',
                options: ['Trêu chọc bạn', 'Khoe điểm cao của mình', 'Lắng nghe và động viên bạn', 'Mặc kệ bạn'],
                correctAnswer: 2,
                explanation: 'Đúng rồi, một người bạn tốt biết lắng nghe và chia sẻ nỗi buồn với bạn mình.'
            }
        }
    },
    {
        id: 'l9-m3',
        title: 'Ranh giới nâng cao',
        description: 'Thiết lập ranh giới an toàn cho cơ thể, cảm xúc và cả trên mạng.',
        ageGroup: '9-11',
        duration: '5 phút',
        thumbnail: '/images/personal_space.png',
        category: 'Safety',
        content: {
            introduction: 'Ranh giới không chỉ là khoảng cách vật lý, mà còn là sự thoải mái trong tâm hồn.',
            mainPoints: [
                {
                    title: 'Ranh giới cơ thể & cảm xúc',
                    text: 'Bạn có quyền từ chối những lời trêu chọc về ngoại hình hay những hành động thân mật mà bạn không thích.',
                    image: '/images/personal_space.png'
                },
                {
                    title: 'Ranh giới online',
                    text: 'Trên mạng xã hội, bạn cũng có quyền chặn (block) hoặc xóa kết bạn với những người làm phiền bạn.',
                    image: '/images/internet_safety.png'
                }
            ],
            interactive: {
                question: 'Nếu ai đó trêu chọc ngoại hình của bạn làm bạn buồn, bạn sẽ làm gì?',
                options: ['Im lặng chịu đựng', 'Nói nghiêm túc: "Tớ không thích, hãy dừng lại"', 'Đánh bạn đó', 'Nghỉ chơi luôn'],
                correctAnswer: 1,
                explanation: 'Rất tốt! Hãy thể hiện thái độ rõ ràng và nghiêm túc để bảo vệ ranh giới cảm xúc của mình.'
            }
        }
    },
    {
        id: 'l9-m4',
        title: 'An toàn Internet cơ bản',
        description: 'Bảo vệ thông tin cá nhân trên môi trường mạng.',
        ageGroup: '9-11',
        duration: '6 phút',
        thumbnail: '/images/internet_safety.png',
        category: 'Safety',
        content: {
            introduction: 'Internet giống như một thành phố lớn, có nhiều điều thú vị nhưng cũng có người lạ.',
            mainPoints: [
                {
                    title: 'Không chia sẻ thông tin',
                    text: 'Tuyệt đối không đưa số điện thoại, địa chỉ nhà, trường học hay ảnh riêng tư cho người lạ trên mạng.',
                    image: '/images/internet_safety.png'
                },
                {
                    title: 'Người lạ là ai?',
                    text: 'Người lạ trên mạng có thể giả vờ là bạn bè cùng trang lứa. Đừng bao giờ đồng ý gặp mặt người quen qua mạng mà không có bố mẹ.',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'Bạn mới quen trên game online xin số điện thoại để "kết bạn Zalo", bạn sẽ làm gì?',
                options: ['Cho ngay', 'Hỏi ý kiến bố mẹ trước', 'Cho số của bạn mình', 'Hẹn gặp mặt'],
                correctAnswer: 1,
                explanation: 'Chính xác! Luôn hỏi ý kiến bố mẹ trước khi chia sẻ bất kỳ thông tin liên lạc nào nhé.'
            }
        }
    },
    {
        id: 'l9-m5',
        title: 'Kỹ năng nói ra',
        description: 'Dũng cảm chia sẻ những điều làm mình lo lắng.',
        ageGroup: '9-11',
        duration: '4 phút',
        thumbnail: '/images/trust_team.png',
        category: 'Emotion',
        content: {
            introduction: 'Giữ nỗi lo trong lòng giống như đeo ba lô đá nặng trĩu. Hãy học cách bỏ nó xuống.',
            mainPoints: [
                {
                    title: 'Không giữ bí mật xấu',
                    text: 'Bất cứ ai đe dọa bạn hoặc làm bạn sợ, đó là bí mật xấu. Hãy nói ngay với người lớn.',
                    image: '/images/trust_team.png'
                },
                {
                    title: 'Tìm người giúp đỡ',
                    text: 'Hãy lập danh sách "Đội bảo vệ" của riêng bạn: Bố, Mẹ, Thầy Cô, hay Tổng đài bảo vệ trẻ em 111.',
                    image: '/images/helping_hand.png'
                }
            ],
            interactive: {
                question: 'Ai là người phù hợp nhất để bạn tâm sự khi gặp rắc rối?',
                options: ['Người lạ ngoài đường', 'Bạn bè trên mạng', 'Người lớn tin cậy (Bố mẹ, Thầy cô)', 'Giữ trong lòng'],
                correctAnswer: 2,
                explanation: 'Đúng rồi. Người lớn tin cậy có kinh nghiệm và khả năng giúp đỡ bạn giải quyết vấn đề.'
            }
        }
    },

    // --- Age Group 12-14: Puberty & Adolescence ---
    {
        id: 'l12-m1',
        title: 'Dậy thì & Thay đổi',
        description: 'Tìm hiểu khoa học về những thay đổi của cơ thể và cảm xúc.',
        ageGroup: '12-14',
        duration: '6 phút',
        thumbnail: '/images/puberty_hygiene.png',
        category: 'Body',
        content: {
            introduction: 'Chào mừng bạn đến với tuổi dậy thì - giai đoạn "lột xác" quan trọng nhất để trở thành người lớn.',
            mainPoints: [
                {
                    title: 'Thay đổi cơ thể',
                    text: 'Cơ thể bạn sẽ thay đổi hình dáng, giọng nói và bắt đầu có kinh nguyệt (nữ) hoặc mộng tinh (nam). Đây là dấu hiệu sinh lý hoàn toàn bình thường cho thấy hệ sinh sản đang hoạt động.',
                    image: '/images/growth_puberty.png'
                },
                {
                    title: 'Không xấu hổ',
                    text: 'Đừng lo lắng về mụn trứng cá hay mùi cơ thể. Ai cũng trải qua giai đoạn này. Hãy giữ vệ sinh thật tốt và tự tin lên!',
                    image: '/images/puberty_hygiene.png'
                }
            ],
            interactive: {
                question: 'Bạn thấy mình bắt đầu có mùi cơ thể, điều đó có nghĩa là?',
                options: ['Bạn ở dơ', 'Bạn bị bệnh', 'Bạn đang dậy thì và cần chú ý vệ sinh hơn', 'Không có ý nghĩa gì'],
                correctAnswer: 2,
                explanation: 'Chính xác. Tuyến mồ hôi hoạt động mạnh là dấu hiệu của dậy thì. Hãy dùng lăn khử mùi và tắm rửa thường xuyên nhé.'
            }
        }
    },
    {
        id: 'l12-m2',
        title: 'Cảm xúc & Rung động',
        description: 'Hiểu về tình cảm, sự rung động đầu đời (crush) một cách lành mạnh.',
        ageGroup: '12-14',
        duration: '5 phút',
        thumbnail: '/images/first_crush.png',
        category: 'Emotion',
        content: {
            introduction: 'Tim đập nhanh khi gặp ai đó? Chúc mừng, bạn đang có những rung động đầu đời!',
            mainPoints: [
                {
                    title: 'Thích ai đó là bình thường',
                    text: 'Cảm giác "crush" một người là một phần đẹp đẽ của sự trưởng thành. Nó giúp chúng ta biết quan tâm và hoàn thiện bản thân hơn.',
                    image: '/images/first_crush.png'
                },
                {
                    title: 'Không cần vội vàng',
                    text: 'Tình cảm cần thời gian để chín muồi. Hãy giữ những rung động trong sáng và tập trung vào việc học tập, kết bạn lành mạnh.',
                    image: '/images/decision_making.png'
                }
            ],
            interactive: {
                question: 'Khi thích một bạn trong lớp, hành động nào là phù hợp?',
                options: ['Bám theo bạn ấy mọi lúc', 'Cố gắng học tốt và giúp đỡ bạn ấy', 'Nhắn tin làm phiền liên tục', 'Ghét bạn ấy'],
                correctAnswer: 1,
                explanation: 'Tuyệt vời. Tình cảm đẹp là động lực để cùng nhau tiến bộ. Hãy tôn trọng không gian riêng của bạn ấy nữa nhé.'
            }
        }
    },
    {
        id: 'l12-m3',
        title: 'Đồng thuận (Consent)',
        description: 'Học về sự tôn trọng và đồng thuận trong các mối quan hệ.',
        ageGroup: '12-14',
        duration: '6 phút',
        thumbnail: '/images/consent_handshake.png',
        category: 'Respect',
        content: {
            introduction: 'Trong mọi mối quan hệ, "Đồng thuận" là chìa khóa vàng. Có nghĩa là sự đồng ý rõ ràng và tự nguyện.',
            mainPoints: [
                {
                    title: 'YES nghĩa là YES',
                    text: 'Sự đồng ý phải được nói ra rõ ràng, hào hứng và không bị ép buộc. Im lặng KHÔNG phải là đồng ý.',
                    image: '/images/consent_handshake.png'
                },
                {
                    title: 'Quyền từ chối',
                    text: 'Bạn có quyền nói KHÔNG với bất kỳ hành động thân mật nào, bất cứ lúc nào, kể cả khi bạn đã từng đồng ý trước đó.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'Bạn muốn nắm tay người yêu, nhưng bạn ấy rụt tay lại và im lặng. Bạn nên làm gì?',
                options: ['Cứ nắm đại', 'Giận dỗi', 'Tôn trọng và không nắm tay nữa', 'Hỏi đi hỏi lại cho đến khi đồng ý'],
                correctAnswer: 2,
                explanation: 'Chính xác. Hành động rụt tay lại là dấu hiệu từ chối. Hãy tôn trọng quyết định và cơ thể của người khác.'
            }
        }
    },
    {
        id: 'l12-m4',
        title: 'Internet & Mạng xã hội',
        description: 'Đối mặt với áp lực ảo và bảo vệ hình ảnh cá nhân.',
        ageGroup: '12-14',
        duration: '5 phút',
        thumbnail: '/images/phone_pressure.png',
        category: 'Safety',
        content: {
            introduction: 'Mạng xã hội là con dao hai lưỡi. Đừng để những like ảo ảnh hưởng đến giá trị thật của bạn.',
            mainPoints: [
                {
                    title: 'Hình ảnh cá nhân',
                    text: 'Một khi ảnh đã đăng lên mạng, bạn rất khó kiểm soát nó. Tuyệt đối không gửi ảnh nhạy cảm (nude) cho bất kỳ ai, dù tin tưởng đến đâu.',
                    image: '/images/internet_safety.png'
                },
                {
                    title: 'Áp lực đồng trang lứa',
                    text: 'Đừng cảm thấy mình thua kém vì những bức ảnh lung linh của người khác. Mạng xã hội chỉ là một phần nhỏ của cuộc sống.',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'Ai đó dọa sẽ tung tin nhắn riêng tư của bạn lên mạng nếu bạn không làm theo ý họ. Đây là hành vi gì?',
                options: ['Trêu đùa', 'Quan tâm', 'Bắt nạt qua mạng (Cyberbullying)', 'Kết bạn'],
                correctAnswer: 2,
                explanation: 'Đúng. Đây là hành vi bắt nạt và tống tiền. Đừng sợ hãi, hãy chụp màn hình lại và báo ngay cho bố mẹ hoặc thầy cô.'
            }
        }
    },
    {
        id: 'l12-m5',
        title: 'Tự bảo vệ & Tìm trợ giúp',
        description: 'Kỹ năng xử lý khi bị quấy rối hoặc cảm thấy không an toàn.',
        ageGroup: '12-14',
        duration: '5 phút',
        thumbnail: '/images/safety_whistle.png',
        category: 'Safety',
        content: {
            introduction: 'Biết cách tự bảo vệ là kỹ năng sinh tồn quan trọng nhất của tuổi trưởng thành.',
            mainPoints: [
                {
                    title: 'Khi bị làm phiền',
                    text: 'Nếu ai đó bám theo, nhắn tin tục tĩu hoặc đụng chạm không mong muốn, hãy phản ứng mạnh mẽ và tìm nơi an toàn.',
                    image: '/images/safety_whistle.png'
                },
                {
                    title: 'Nói với ai?',
                    text: 'Đừng chịu đựng một mình. Bố mẹ, thầy cô tâm lý, hoặc các tổ chức bảo vệ trẻ em luôn sẵn sàng lắng nghe bạn.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'Bạn bị một nhóm người lạ trêu ghẹo trên đường đi học về. Bạn nên làm gì?',
                options: ['Đứng lại cãi nhau', 'Đi vào nơi đông người (cửa hàng, bảo vệ) và gọi người thân', 'Khóc tại chỗ', 'Đi vào ngõ vắng để trốn'],
                correctAnswer: 1,
                explanation: 'Rất thông minh. Hãy tìm chỗ đông người và nhờ người lớn giúp đỡ ngay lập tức.'
            }
        }
    },

    // --- Age Group 15-17: Responsibility & Decisions ---
    {
        id: 'l15-m1',
        title: 'Mối quan hệ lành mạnh',
        description: 'Xây dựng mối quan hệ dựa trên sự tôn trọng, không kiểm soát hay ép buộc.',
        ageGroup: '15-17',
        duration: '7 phút',
        thumbnail: '/images/healthy_relationships.png',
        category: 'Respect',
        content: {
            introduction: 'Tình yêu tuổi học trò có thể kẹo ngọt, nhưng cũng có thể "độc hại". Làm sao để nhận biết?',
            mainPoints: [
                {
                    title: 'Tôn trọng lẫn nhau',
                    text: 'Trong một mối quan hệ lành mạnh, cả hai đều có quyền tự do cá nhân, có bạn bè riêng và sở thích riêng. Không ai sở hữu ai cả.',
                    image: '/images/healthy_relationships.png'
                },
                {
                    title: 'Dấu hiệu độc hại (Red Flags)',
                    text: 'Kiểm soát tin nhắn, ghen tuông vô lý, cô lập bạn với bạn bè, hay ép buộc bạn làm điều mình không thích. Đó là báo động đỏ!',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'Người yêu yêu cầu bạn đưa mật khẩu Facebook để "chứng minh tình yêu". Bạn sẽ làm gì?',
                options: ['Đưa ngay vì yêu mà', 'Không đưa và giải thích về quyền riêng tư', 'Đưa nhưng lén đổi mật khẩu sau', 'Chia tay ngay lập tức'],
                correctAnswer: 1,
                explanation: 'Chính xác! Tình yêu cần sự tin tưởng, không phải sự kiểm soát. Mật khẩu là quyền riêng tư cá nhân.'
            }
        }
    },
    {
        id: 'l15-m2',
        title: 'Đồng thuận Nâng cao',
        description: 'Hiểu sâu hơn về đồng thuận: Là một quá trình và có thể rút lại bất cứ lúc nào.',
        ageGroup: '15-17',
        duration: '6 phút',
        thumbnail: '/images/consent_revoke.png',
        category: 'Respect',
        content: {
            introduction: 'Đồng thuận không chỉ là một câu "YES" ban đầu. Nó là một cuộc đối thoại liên tục.',
            mainPoints: [
                {
                    title: 'Có thể rút lại (Revoke)',
                    text: 'Bạn có thể đồng ý lúc đầu, nhưng giữa chừng cảm thấy không thoải mái, bạn có quyền dừng lại. "YES" lúc 8h không có nghĩa là "YES" lúc 9h.',
                    image: '/images/consent_revoke.png'
                },
                {
                    title: 'Không ép buộc',
                    text: 'Nếu ai đó năn nỉ, dọa dẫm hay chuốc say để có được sự đồng ý, đó KHÔNG phải là đồng thuận. Đó là xâm hại.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'Bạn và người yêu đang hôn nhau, nhưng bạn đột nhiên cảm thấy không muốn tiếp tục nữa. Bạn có quyền dừng lại không?',
                options: ['Không, đã lỡ rồi phải chiều', 'Có, chắc chắn rồi', 'Chỉ khi người kia đồng ý dừng', 'Sợ người kia buồn nên cố chịu'],
                correctAnswer: 1,
                explanation: 'Hoàn toàn có quyền! Cơ thể là của bạn. Cảm xúc của bạn quan trọng hơn sự thỏa mãn của người khác tại thời điểm đó.'
            }
        }
    },
    {
        id: 'l15-m3',
        title: 'Kỹ năng số & Hình ảnh cá nhân',
        description: 'Dấu chân số của bạn sẽ đi theo bạn suốt đời. Hãy cẩn trọng.',
        ageGroup: '15-17',
        duration: '8 phút',
        thumbnail: '/images/digital_footprint.png',
        category: 'Safety',
        content: {
            introduction: 'Mọi thứ bạn đăng, like, comment đều để lại dấu vết. Nhà tuyển dụng tương lai đang "Google" bạn đấy!',
            mainPoints: [
                {
                    title: 'Dấu chân số (Digital Footprint)',
                    text: 'Một bức ảnh tiệc tùng quá đà hôm nay có thể khiến bạn mất cơ hội học bổng ngày mai. Hãy suy nghĩ kỹ trước khi nhấn Post.',
                    image: '/images/digital_footprint.png'
                },
                {
                    title: 'Gửi ảnh nhạy cảm (Sexting)',
                    text: 'Một khi ảnh đã gửi đi, bạn mất hoàn toàn quyền kiểm soát nó. Rủi ro bị phát tán (Revenge Porn) là rất thật và để lại hậu quả nghiêm trọng.',
                    image: '/images/internet_safety.png'
                }
            ],
            interactive: {
                question: 'Bạn bè thách bạn đăng một status chửi thề cho ngầu. Bạn nghĩ gì?',
                options: ['Đăng luôn sợ gì', 'Đăng rồi xóa ngay', 'Từ chối vì nó ảnh hưởng đến hình ảnh cá nhân', 'Đăng ở chế độ bạn bè thôi'],
                correctAnswer: 2,
                explanation: 'Rất chín chắn. Internet không bao giờ quên. Hãy xây dựng một hình ảnh online văn minh và tích cực.'
            }
        }
    },
    {
        id: 'l15-m4',
        title: 'Quyết định & Trách nhiệm',
        description: 'Mỗi lựa chọn đều có hậu quả. Hãy học cách ra quyết định có trách nhiệm.',
        ageGroup: '15-17',
        duration: '7 phút',
        thumbnail: '/images/decision_making.png',
        category: 'Emotion',
        content: {
            introduction: 'Tự do đi kèm với trách nhiệm. Làm sao để đưa ra những quyết định đúng đắn giữa ngã rẽ cuộc đời?',
            mainPoints: [
                {
                    title: 'Xác định giá trị bản thân',
                    text: 'Điều gì quan trọng nhất với bạn? Sự trung thực, sức khỏe, hay tương lai? Khi biết rõ giá trị của mình, bạn sẽ dễ dàng chọn lựa hơn.',
                    image: '/images/decision_making.png'
                },
                {
                    title: 'Hệ quả (Consequences)',
                    text: 'Trước khi làm gì (quan hệ tình dục, uống rượu...), hãy tự hỏi: "Nếu chuyện xấu nhất xảy ra (có thai, tai nạn...), mình có chịu trách nhiệm được không?".',
                    image: '/images/decision_making.png'
                }
            ],
            interactive: {
                question: 'Tại bữa tiệc, mọi người ép bạn uống rượu và lái xe về. Bạn sẽ chọn?',
                options: ['Uống cho vui vẻ cả nhà', 'Uống một chút thôi', 'Từ chối kiên quyết và gọi taxi về', 'Giả vờ uống rồi đổ đi'],
                correctAnswer: 2,
                explanation: 'Tuyệt vời. An toàn tính mạng là trên hết. Bạn đã chứng tỏ sự trưởng thành và bản lĩnh của mình.'
            }
        }
    },
    {
        id: 'l15-m5',
        title: 'Hỗ trợ & Nguồn lực',
        description: 'Biết tìm kiếm sự trợ giúp không phải là yếu đuối, mà là thông minh.',
        ageGroup: '15-17',
        duration: '5 phút',
        thumbnail: '/images/helping_hand.png',
        category: 'Safety',
        content: {
            introduction: 'Cuộc sống sẽ có lúc khó khăn. Đừng ngần ngại tìm kiếm sự hỗ trợ chuyên nghiệp.',
            mainPoints: [
                {
                    title: 'Khi nào cần giúp đỡ?',
                    text: 'Khi bạn cảm thấy bế tắc, trầm cảm, bị lạm dụng hoặc có nguy cơ mang thai ngoài ý muốn. Đừng giữ im lặng.',
                    image: '/images/helping_hand.png'
                },
                {
                    title: 'Địa chỉ tin cậy',
                    text: 'Ngoài gia đình, hãy nhớ các số hotline: 111 (Bảo vệ trẻ em), các trung tâm tư vấn tâm lý, sức khỏe sinh sản uy tín.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'Bạn nghi ngờ mình có thai hoặc bị lây bệnh qua đường tình dục. Bạn nên làm gì đầu tiên?',
                options: ['Lên mạng tìm cách chữa dân gian', 'Hỏi bạn bè cùng lớp', 'Đến cơ sở y tế chuyên khoa để khám', 'Giấu kín và lo lắng'],
                correctAnswer: 2,
                explanation: 'Chính xác. Chỉ có bác sĩ và chuyên gia y tế mới có thể giúp bạn an toàn và chính xác nhất. Đừng tin vào "bác sĩ Google".'
            }
        }
    }
];

export const curriculumEn: Lesson[] = [
    // --- Age Group 6-8: Foundation (Body & Safety) ---
    {
        id: 'l6-m1',
        title: 'My Wonderful Body',
        description: 'Recognize and respect your body. Everyone is unique and wonderfully made.',
        ageGroup: '6-8',
        duration: '3 mins',
        thumbnail: '/images/body_parts.png',
        category: 'Body',
        content: {
            introduction: 'Hello there! Today we are going to explore a magnificent wonder of the world: your very own body!',
            mainPoints: [
                {
                    title: 'Body Parts',
                    text: 'Our bodies have a Head, Arms, Legs, Chest, and special private areas. Let us learn their proper names together.',
                    image: '/images/body_parts.png'
                },
                {
                    title: 'My Body Belongs to Me',
                    text: 'Nobody has the right to hurt your body. You are the one and only owner of your body.',
                    image: '/images/my_body_autonomy.png'
                }
            ],
            interactive: {
                question: 'Is this an arm or a leg?',
                options: ['Arm', 'Leg', 'Head', 'Tummy'],
                correctAnswer: 0,
                explanation: 'Correct! Our arms help us hold things, hug loved ones, and create art. Let\'s cherish our arms!'
            }
        }
    },
    {
        id: 'l6-m2',
        title: 'Private Zones',
        description: 'Understand private areas and safe personal boundaries.',
        ageGroup: '6-8',
        duration: '4 mins',
        thumbnail: '/images/swimsuit.png',
        category: 'Body',
        content: {
            introduction: 'Why do we wear swimsuits at the beach? Let\'s discover the secret of the swimsuit zones.',
            mainPoints: [
                {
                    title: 'What is a Swimsuit Zone?',
                    text: 'These are the parts of the body covered by a swimsuit. These are called your "Private Zones".',
                    image: '/images/swimsuit.png'
                },
                {
                    title: 'The No-Touch Rule',
                    text: 'Nobody is allowed to look at or touch your private zones, except doctors during a checkup (with parents present) or parents when helping you bathe.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'If someone asks to see your swimsuit zone, is that OK?',
                options: ['Very OK', 'Normal', 'Not OK at all', 'Agree happily'],
                correctAnswer: 2,
                explanation: 'Spot on! That is NOT OK. You always have the right to say NO and tell a trusted adult immediately.'
            }
        }
    },
    {
        id: 'l6-m3',
        title: 'Safe & Unsafe Touches',
        description: 'Differentiate between touches that make us feel happy and safe versus uncomfortable.',
        ageGroup: '6-8',
        duration: '4 mins',
        thumbnail: '/images/safe_touch.png',
        category: 'Safety',
        content: {
            introduction: 'How do you feel when your parents hug you? And when someone pinches you? Your feelings matter greatly.',
            mainPoints: [
                {
                    title: 'Safe Touches',
                    text: 'A handshake with a friend, a warm hug from parents, or a doctor\'s exam. They make you feel comfortable and secure.',
                    image: '/images/safe_touch.png'
                },
                {
                    title: 'Unsafe Touches',
                    text: 'When someone causes you pain, fear, discomfort, or demands that you keep the touch a secret.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'A stranger wants to hug and kiss you, how do you feel?',
                options: ['Happy', 'Comfortable', 'Uncomfortable and unwilling', 'Normal'],
                correctAnswer: 2,
                explanation: 'Exactly right. If you feel uncomfortable, you do not have to hug them. Politely refuse or step away to safety.'
            }
        }
    },
    {
        id: 'l6-m4',
        title: 'Bravely Saying NO',
        description: 'Learn how to firmly refuse and seek help when encountering unsafe situations.',
        ageGroup: '6-8',
        duration: '5 mins',
        thumbnail: '/images/say_no.png',
        category: 'Safety',
        content: {
            introduction: 'Even superheroes have a safety team! When facing danger, always remember the "3 Protection Steps".',
            mainPoints: [
                {
                    title: '3 Protection Steps',
                    text: '1. Say NO loudly.\n2. Leave the scene immediately.\n3. Tell a trusted adult right away.',
                    image: '/images/say_no.png'
                },
                {
                    title: 'Who is a Trusted Adult?',
                    text: 'Your parents, grandparents, and teachers. Share anything that makes you feel uneasy with them.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'If someone makes you feel scared or unsafe, what magic words should you say?',
                options: ['Say nothing', 'Stop it right now!', 'Thank you', 'I like this'],
                correctAnswer: 1,
                explanation: 'Very brave! "Stop it right now!" or "I don\'t like this!" are your protective magic words. Then run to find a trusted adult.'
            }
        }
    },
    {
        id: 'l6-m5',
        title: 'Good Secrets & Bad Secrets',
        description: 'Not all secrets should be kept. Learn how to tell them apart.',
        ageGroup: '6-8',
        duration: '4 mins',
        thumbnail: '/images/secrets.png',
        category: 'Emotion',
        content: {
            introduction: 'Shh! Do you like surprises? Some secrets bring joy, but other secrets cause worry and sadness.',
            mainPoints: [
                {
                    title: 'Good Secrets',
                    text: 'A surprise birthday gift for mom, or a fun game of hide-and-seek. They make everyone feel happy and safe.',
                    image: '/images/first_crush.png'
                },
                {
                    title: 'Bad Secrets',
                    text: 'When someone tells you "never tell your parents", or makes you feel afraid or sad. Bad secrets must NEVER be kept.',
                    image: '/images/secrets.png'
                }
            ],
            interactive: {
                question: 'If someone shows you strange pictures and says "don\'t tell your mom", what kind of secret is that?',
                options: ['Good Secret', 'Great Secret', 'Bad Secret (Tell parents right away)', 'Fun Secret'],
                correctAnswer: 2,
                explanation: 'Correct! That is a bad secret because it pressures you to hide things from your parents. Tell your mom immediately; she will help and protect you.'
            }
        }
    },

    // --- Age Group 9-11: Awareness (Pre-puberty) ---
    {
        id: 'l9-m1',
        title: 'My Body is Growing Up',
        description: 'Understand that every body grows and changes at its own natural pace.',
        ageGroup: '9-11',
        duration: '5 mins',
        thumbnail: '/images/growth_puberty.png',
        category: 'Body',
        content: {
            introduction: 'Hello friends! Have you ever looked in the mirror and noticed you look different from last year? That is the wonderful journey of growing up!',
            mainPoints: [
                {
                    title: 'Every Flower Blooms in Its Own Time',
                    text: 'Our bodies are like plants — some grow tall quickly, others take a bit more time. Everyone develops differently and that is completely normal.',
                    image: '/images/growth_puberty.png'
                },
                {
                    title: 'Avoid Comparison',
                    text: 'Do not worry if you aren\'t as tall as your peers yet. Eat nutritious meals, stay active, and your body will grow right on its own schedule.',
                    image: '/images/body_parts.png'
                }
            ],
            interactive: {
                question: 'If you notice you are shorter than some classmates, what is the best mindset?',
                options: ['I am inferior', 'I must be sick', 'Everyone grows at their own pace; I am doing great', 'Take pills immediately'],
                correctAnswer: 2,
                explanation: 'Wonderful! Everyone follows a unique growth curve. Love and appreciate your body every day.'
            }
        }
    },
    {
        id: 'l9-m2',
        title: 'Emotions & True Friendship',
        description: 'Identify complex emotions and learn to respect and support your friends.',
        ageGroup: '9-11',
        duration: '5 mins',
        thumbnail: '/images/emotions_complex.png',
        category: 'Emotion',
        content: {
            introduction: 'Sometimes we experience mixed feelings: excitement, sadness, or a little jealousy. How do we navigate this emotional palette?',
            mainPoints: [
                {
                    title: 'Complex Feelings',
                    text: 'Growing up means experiencing a wider range of emotions: shyness, butterflies in our stomach, or frustration. Take a deep breath and name your feeling.',
                    image: '/images/emotions_complex.png'
                },
                {
                    title: 'Respecting Friends\' Emotions',
                    text: 'Friends also have ups and downs. Practicing empathy and active listening strengthens bonds.',
                    image: '/images/first_crush.png'
                }
            ],
            interactive: {
                question: 'When your best friend is feeling sad over a poor test score, what should you do?',
                options: ['Tease them', 'Boast about your high grade', 'Listen and offer genuine encouragement', 'Ignore them'],
                correctAnswer: 2,
                explanation: 'That\'s right! A good friend knows how to listen and stand by their friends through difficult moments.'
            }
        }
    },
    {
        id: 'l9-m3',
        title: 'Advanced Personal Boundaries',
        description: 'Establish firm boundaries for your body, feelings, and online presence.',
        ageGroup: '9-11',
        duration: '5 mins',
        thumbnail: '/images/personal_space.png',
        category: 'Safety',
        content: {
            introduction: 'Boundaries are not just physical distances; they are emotional comfort zones that protect our peace of mind.',
            mainPoints: [
                {
                    title: 'Physical & Emotional Boundaries',
                    text: 'You have every right to refuse body shaming jokes or physical gestures that you dislike.',
                    image: '/images/personal_space.png'
                },
                {
                    title: 'Online Boundaries',
                    text: 'On digital platforms, you have the full right to block or unfriend anyone who bothers or harasses you.',
                    image: '/images/internet_safety.png'
                }
            ],
            interactive: {
                question: 'If someone teases your appearance and it hurts your feelings, what should you do?',
                options: ['Stay silent and suffer', 'Firmly say: "I do not appreciate that, please stop"', 'Fight them physically', 'Quit school'],
                correctAnswer: 1,
                explanation: 'Great job! Speaking up with clear, calm firmness protects your personal boundaries.'
            }
        }
    },
    {
        id: 'l9-m4',
        title: 'Basic Internet Safety',
        description: 'Protect your personal information in the digital world.',
        ageGroup: '9-11',
        duration: '6 mins',
        thumbnail: '/images/internet_safety.png',
        category: 'Safety',
        content: {
            introduction: 'The internet is like an enormous city — filled with fascinating knowledge, but also unfamiliar strangers.',
            mainPoints: [
                {
                    title: 'Never Share Private Info',
                    text: 'Never give your phone number, home address, school name, or private photos to strangers online.',
                    image: '/images/internet_safety.png'
                },
                {
                    title: 'Who is an Online Stranger?',
                    text: 'Online users can pretend to be someone your age. Never agree to meet someone from the internet in person without your parents.',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'A new player you met in an online game asks for your phone number to chat privately. What should you do?',
                options: ['Give it immediately', 'Ask parents first for permission', 'Give a friend\'s number', 'Set up an in-person meeting'],
                correctAnswer: 1,
                explanation: 'Spot on! Always check with parents before sharing any contact or personal information online.'
            }
        }
    },
    {
        id: 'l9-m5',
        title: 'The Power of Speaking Up',
        description: 'Find courage to share concerns and seek support from trusted adults.',
        ageGroup: '9-11',
        duration: '4 mins',
        thumbnail: '/images/trust_team.png',
        category: 'Emotion',
        content: {
            introduction: 'Bottling up worries inside is like carrying a heavy backpack of stones. Let\'s learn how to put it down.',
            mainPoints: [
                {
                    title: 'Break Bad Secrets',
                    text: 'Anyone who threatens or frightens you is creating a bad secret. Speak to an adult immediately.',
                    image: '/images/trust_team.png'
                },
                {
                    title: 'Find Your Safety Team',
                    text: 'Build your personal "Trust Circle": Parents, Teachers, School Counselors, or Child Helpline services.',
                    image: '/images/helping_hand.png'
                }
            ],
            interactive: {
                question: 'Who is the most suitable person to confide in when you face trouble?',
                options: ['A stranger on the street', 'Anonymous online gamers', 'Trusted adults (Parents, Teachers)', 'Keep it buried inside'],
                correctAnswer: 2,
                explanation: 'Correct! Trusted adults have the experience, care, and authority to help you resolve challenges safely.'
            }
        }
    },

    // --- Age Group 12-14: Puberty & Adolescence ---
    {
        id: 'l12-m1',
        title: 'Puberty & Physical Transformation',
        description: 'Scientific insights into physical and emotional changes during adolescence.',
        ageGroup: '12-14',
        duration: '6 mins',
        thumbnail: '/images/puberty_hygiene.png',
        category: 'Body',
        content: {
            introduction: 'Welcome to puberty — the most significant and exciting metamorphic phase on your path to adulthood.',
            mainPoints: [
                {
                    title: 'Body Changes',
                    text: 'Your body develops new curves, voice changes occur, and menstruation (females) or nocturnal emissions (males) begin. These are completely healthy biological milestones signaling reproductive maturation.',
                    image: '/images/growth_puberty.png'
                },
                {
                    title: 'No Shame in Growth',
                    text: 'Do not feel self-conscious about acne or body odor. Everyone undergoes these changes. Maintain daily personal hygiene and walk with confidence!',
                    image: '/images/puberty_hygiene.png'
                }
            ],
            interactive: {
                question: 'You notice changes in your body odor during puberty. What does this mean?',
                options: ['You are permanently dirty', 'You are sick', 'You are experiencing puberty and need regular personal hygiene', 'It means nothing'],
                correctAnswer: 2,
                explanation: 'Spot on. Active sweat and apocrine glands are hallmarks of puberty. Regular showering and deodorant keep you fresh and healthy.'
            }
        }
    },
    {
        id: 'l12-m2',
        title: 'Crushes & Teenage Feelings',
        description: 'Understanding romantic attractions and first crushes in a healthy, positive way.',
        ageGroup: '12-14',
        duration: '5 mins',
        thumbnail: '/images/first_crush.png',
        category: 'Emotion',
        content: {
            introduction: 'Does your heart skip a beat when seeing someone special? Congratulations, you are experiencing your first teenage crush!',
            mainPoints: [
                {
                    title: 'Having a Crush is Normal',
                    text: 'Attraction is a natural, beautiful facet of growing up. It teaches us how to appreciate others and inspire personal self-improvement.',
                    image: '/images/first_crush.png'
                },
                {
                    title: 'No Rush',
                    text: 'Meaningful connections require time. Cherish gentle feelings while maintaining a healthy focus on school, friendships, and personal passions.',
                    image: '/images/decision_making.png'
                }
            ],
            interactive: {
                question: 'When you develop feelings for a classmate, what is the most respectful approach?',
                options: ['Follow them everywhere', 'Focus on self-improvement, kindness, and study together', 'Spam their inbox repeatedly', 'Express resentment'],
                correctAnswer: 1,
                explanation: 'Awesome! Wholesome affection serves as mutual motivation to grow. Always honor their personal boundaries.'
            }
        }
    },
    {
        id: 'l12-m3',
        title: 'Consent & Mutual Respect',
        description: 'Learn the golden rules of respect and consent across all personal relationships.',
        ageGroup: '12-14',
        duration: '6 mins',
        thumbnail: '/images/consent_handshake.png',
        category: 'Respect',
        content: {
            introduction: 'In every relationship, "Consent" is the golden standard. It means clear, voluntary, and enthusiastic agreement.',
            mainPoints: [
                {
                    title: 'YES Means YES',
                    text: 'Consent must be clearly articulated, enthusiastic, and uncoerced. Silence or hesitation is NOT consent.',
                    image: '/images/consent_handshake.png'
                },
                {
                    title: 'The Right to Say NO',
                    text: 'You have the absolute right to say NO to any physical intimacy, at any time, even if you agreed earlier.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'You attempt to hold your friend\'s hand, but they pull away quietly. What should you do?',
                options: ['Force their hand', 'Show anger', 'Respect their body language and refrain from touching', 'Ask over and over until they yield'],
                correctAnswer: 2,
                explanation: 'Exactly right. Pulling back is a clear cue of discomfort. Respecting others\' autonomy is fundamental to every healthy relationship.'
            }
        }
    },
    {
        id: 'l12-m4',
        title: 'Social Media & Digital Footprint',
        description: 'Conquer digital peer pressure and safeguard your personal image.',
        ageGroup: '12-14',
        duration: '5 mins',
        thumbnail: '/images/phone_pressure.png',
        category: 'Safety',
        content: {
            introduction: 'Social media can be a double-edged sword. Never let vanity metrics define your true self-worth.',
            mainPoints: [
                {
                    title: 'Protecting Personal Images',
                    text: 'Once photos are published online, you lose control over them. Never send intimate or sensitive photos to anyone, regardless of how much you trust them.',
                    image: '/images/internet_safety.png'
                },
                {
                    title: 'Peer Pressure & Comparison',
                    text: 'Do not feel inadequate comparing yourself to curated feeds. Social media is merely a highlight reel, not the full reality.',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'Someone threatens to leak private chats unless you do what they demand. What is this behavior?',
                options: ['A harmless joke', 'Genuine care', 'Cyberbullying & extortion', 'Making friends'],
                correctAnswer: 2,
                explanation: 'Correct. This is online harassment and extortion. Do not give in — take screenshots and report it immediately to parents or school counselors.'
            }
        }
    },
    {
        id: 'l12-m5',
        title: 'Self-Protection & Crisis Resources',
        description: 'Crucial action skills for dealing with harassment and seeking immediate help.',
        ageGroup: '12-14',
        duration: '5 mins',
        thumbnail: '/images/safety_whistle.png',
        category: 'Safety',
        content: {
            introduction: 'Knowing how to defend yourself and seek help is an indispensable life skill for young adults.',
            mainPoints: [
                {
                    title: 'When Encountering Harassment',
                    text: 'If someone follows you, sends vulgar messages, or makes unwanted physical advances, react decisively and move to a well-lit, populated area.',
                    image: '/images/safety_whistle.png'
                },
                {
                    title: 'Who to Reach Out To',
                    text: 'Never suffer in silence. Parents, school psychologists, and child protection organizations are always available to stand by you.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'A group of strangers catcalls you on your way home from school. What is the safest response?',
                options: ['Stop and argue with them', 'Head into a crowded store/security desk and call a family member', 'Cry in place', 'Run into a secluded alleyway'],
                correctAnswer: 1,
                explanation: 'Smart move! Move straight toward populated public places and seek immediate assistance from trusted adults or authorities.'
            }
        }
    },

    // --- Age Group 15-17: Responsibility & Decisions ---
    {
        id: 'l15-m1',
        title: 'Healthy Relationships & Red Flags',
        description: 'Cultivate relationships founded on mutual respect, trust, and personal autonomy.',
        ageGroup: '15-17',
        duration: '7 mins',
        thumbnail: '/images/healthy_relationships.png',
        category: 'Respect',
        content: {
            introduction: 'Young love can be uplifting, but it can also become unhealthy. How do you distinguish genuine love from toxicity?',
            mainPoints: [
                {
                    title: 'Mutual Respect',
                    text: 'In a healthy partnership, both individuals maintain their freedom, independent friendships, and personal hobbies. No partner owns the other.',
                    image: '/images/healthy_relationships.png'
                },
                {
                    title: 'Recognizing Red Flags',
                    text: 'Monitoring messages, irrational jealousy, isolating you from friends, or pressuring you into uncomfortable acts are major warning signs.',
                    image: '/images/phone_pressure.png'
                }
            ],
            interactive: {
                question: 'A partner demands your social media passwords to "prove your love". How should you respond?',
                options: ['Give it immediately to prove love', 'Decline and communicate clear boundaries regarding privacy', 'Give a fake password', 'Silent treatment'],
                correctAnswer: 1,
                explanation: 'Spot on! Healthy love thrives on mutual trust, not surveillance. Personal privacy is a fundamental human right.'
            }
        }
    },
    {
        id: 'l15-m2',
        title: 'Advanced Consent Dynamics',
        description: 'Understand consent as an ongoing, revocable, and enthusiastic dialogue.',
        ageGroup: '15-17',
        duration: '6 mins',
        thumbnail: '/images/consent_revoke.png',
        category: 'Respect',
        content: {
            introduction: 'Consent is far more than a one-time "YES". It is a continuous, voluntary conversation.',
            mainPoints: [
                {
                    title: 'Revocable at Any Moment',
                    text: 'You may initially agree, but if you feel uncomfortable halfway through, you hold the complete right to stop. "YES" at 8 PM does not mandate "YES" at 9 PM.',
                    image: '/images/consent_revoke.png'
                },
                {
                    title: 'Zero Coercion',
                    text: 'If someone begs, threatens, guilts, or uses substances to obtain agreement, that is NOT consent. That is assault.',
                    image: '/images/say_no.png'
                }
            ],
            interactive: {
                question: 'You and your partner are kissing, but you suddenly feel you want to stop. Do you have the right to withdraw consent?',
                options: ['No, you already started', 'Yes, absolutely anytime', 'Only if the other person agrees to stop', 'Endure it to avoid hurting their feelings'],
                correctAnswer: 1,
                explanation: '100% yes! Your body is yours. Your emotional and physical comfort always supersedes anyone else\'s immediate desires.'
            }
        }
    },
    {
        id: 'l15-m3',
        title: 'Digital Footprints & Online Reputation',
        description: 'Your digital footprint endures. Learn mindful online stewardship.',
        ageGroup: '15-17',
        duration: '8 mins',
        thumbnail: '/images/digital_footprint.png',
        category: 'Safety',
        content: {
            introduction: 'Everything you post, share, or comment leaves a permanent trace. Future universities and employers research digital backgrounds!',
            mainPoints: [
                {
                    title: 'Your Digital Footprint',
                    text: 'A reckless post today can compromise scholarship or career opportunities tomorrow. Think carefully before publishing.',
                    image: '/images/digital_footprint.png'
                },
                {
                    title: 'The Realities of Sexting',
                    text: 'Once an intimate image is sent, you surrender control over its distribution. Non-consensual sharing causes devastating, lasting trauma.',
                    image: '/images/internet_safety.png'
                }
            ],
            interactive: {
                question: 'Friends dare you to post a vulgar status online to look cool. What is the mature decision?',
                options: ['Post it boldly', 'Post and delete right away', 'Decline because it tarnishes your personal and digital integrity', 'Post to friends-only'],
                correctAnswer: 2,
                explanation: 'Very mature. The internet preserves data permanently. Curate a digital presence that reflects your authentic, positive values.'
            }
        }
    },
    {
        id: 'l15-m4',
        title: 'Responsible Decision-Making',
        description: 'Every choice carries consequences. Master thoughtful, forward-looking decisions.',
        ageGroup: '15-17',
        duration: '7 mins',
        thumbnail: '/images/decision_making.png',
        category: 'Emotion',
        content: {
            introduction: 'With greater freedom comes greater responsibility. How do we navigate pivotal crossroads in life?',
            mainPoints: [
                {
                    title: 'Define Core Values',
                    text: 'What matters most to you: integrity, wellness, or long-term dreams? Clear personal values simplify complex choices.',
                    image: '/images/decision_making.png'
                },
                {
                    title: 'Evaluating Consequences',
                    text: 'Before taking critical actions (sexual activity, substance use), ask yourself: "If worst-case scenarios arise (unplanned pregnancy, health risks), am I equipped to handle the consequences?".',
                    image: '/images/decision_making.png'
                }
            ],
            interactive: {
                question: 'At a party, peers pressure you to drink alcohol and drive home. What do you do?',
                options: ['Drink to fit in', 'Drink just a small amount', 'Firmly refuse and call a taxi / ride-share home', 'Pretend to drink then drive'],
                correctAnswer: 2,
                explanation: 'Excellent! Your life and safety are paramount. Refusing reckless peer pressure demonstrates true maturity and strength of character.'
            }
        }
    },
    {
        id: 'l15-m5',
        title: 'Seeking Support & Trusted Resources',
        description: 'Reaching out for help is not weakness — it is wisdom.',
        ageGroup: '15-17',
        duration: '5 mins',
        thumbnail: '/images/helping_hand.png',
        category: 'Safety',
        content: {
            introduction: 'Life brings unexpected obstacles. Never hesitate to connect with professional, confidential guidance.',
            mainPoints: [
                {
                    title: 'When to Seek Help',
                    text: 'When facing chronic anxiety, depression, relationship abuse, or reproductive health concerns, silence is your biggest obstacle.',
                    image: '/images/helping_hand.png'
                },
                {
                    title: 'Trusted Hotlines & Centers',
                    text: 'In addition to supportive family, remember dedicated youth helplines, reputable adolescent medical clinics, and certified counseling centers.',
                    image: '/images/trust_team.png'
                }
            ],
            interactive: {
                question: 'You have medical concerns regarding reproductive health or an STI. What is your first and best step?',
                options: ['Search for folk remedies online', 'Ask random classmates', 'Visit a certified healthcare professional / adolescent clinic', 'Hide your symptoms in fear'],
                correctAnswer: 2,
                explanation: 'Spot on! Only qualified healthcare professionals provide accurate, confidential medical care. Never rely on unverified online advice.'
            }
        }
    }
];

export const curriculumData: Lesson[] = curriculumEn;

export const getCurriculumData = (lang: Language = 'en'): Lesson[] => {
    return lang === 'vi' ? curriculumVi : curriculumEn;
};
