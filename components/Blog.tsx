import React, { useState } from "react";
import { BlogPost } from "../types";
import { ArrowRight, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const postsVi: BlogPost[] = [
  {
    id: 1,
    title: "Bé học yêu thương bản thân 💕",
    excerpt:
      "Cùng khám phá những điều tuyệt vời về cơ thể mình qua những câu chuyện dễ thương và hoạt động vui nhộn!",
    content: `🌈 Chào các bạn nhỏ! Hôm nay chúng mình sẽ cùng khám phá một điều siêu thú vị - đó chính là CƠ THỂ của mình nè!

🎈 Bạn có biết không? Cơ thể mình giống như một ngôi nhà kỳ diệu vậy đó! Mỗi bộ phận đều có một "công việc" riêng thật đặc biệt:
• Đôi mắt giúp mình nhìn thấy bầu trời xanh và những bông hoa đẹp 👀
• Đôi tai nghe được tiếng chim hót líu lo 🎵
• Đôi tay ôm được ba mẹ thật chặt 🤗
• Đôi chân đưa mình đến trường gặp bạn bè 🏃

💖 Điều quan trọng nhất là: Cơ thể mình thuộc về MÌNH và mình có quyền bảo vệ nó!

🌟 Hãy nhớ 3 điều ma thuật nhé:
1. Mình yêu cơ thể mình
2. Mình biết cách chăm sóc cơ thể
3. Mình sẽ kể cho người lớn tin tưởng nếu có ai làm mình khó chịu

Các bạn thật tuyệt vời! 🌟`,
    image: "/blog-1.png",
    author: "Wonder",
    date: "20 Th9",
  },
  {
    id: 2,
    title: "10 câu hỏi 'siêu cute' của bé ✨",
    excerpt:
      "Những thắc mắc hồn nhiên về cơ thể mà các bạn nhỏ hay hỏi - Ba mẹ cùng trò chuyện nhé!",
    content: `🎀 Ba mẹ ơi, con có câu hỏi nè!

Các bạn nhỏ thường rất tò mò và đặt ra những câu hỏi siêu dễ thương. Đây là 10 câu hỏi phổ biến nhất:

1. 🤔 "Tại sao con trai và con gái khác nhau ạ?"
→ Giống như hoa có nhiều màu sắc, con người cũng có sự đa dạng tuyệt vời!

2. 🛁 "Tại sao phải tắm mỗi ngày?"
→ Để cơ thể mình luôn sạch sẽ và khỏe mạnh như siêu anh hùng!

3. 👶 "Em bé từ đâu ra vậy?"
→ Em bé lớn lên trong bụng mẹ, được yêu thương từ trước khi sinh ra!

4. 🔒 "Vùng riêng tư là gì ạ?"
→ Là những vùng cơ thể được đồ bơi che đậy, chỉ mình mình mới được chạm vào!

5. 🤝 "Khi nào thì ôm người khác được?"
→ Khi cả hai đều vui vẻ và đồng ý nhé!

...và còn nhiều câu hỏi thú vị khác nữa!

💬 Mẹo cho ba mẹ: Hãy trả lời bằng giọng nhẹ nhàng và sử dụng ngôn ngữ phù hợp với tuổi của bé nhé! 💕`,
    image: "/blog-2.png",
    author: "Wonder",
    date: "22 Th9",
  },
  {
    id: 3,
    title: "Mình là siêu anh hùng! 🦸",
    excerpt:
      "Học cách bảo vệ bản thân thật vui với những bí kíp đơn giản dành cho các chiến binh nhí!",
    content: `🦸‍♀️ CHÀO MỪNG CÁC SIÊU ANH HÙNG NHÍ! 🦸‍♂️

Hôm nay, chúng mình sẽ học những "bí kíp thần thánh" để bảo vệ bản thân nhé!

⚡ BÍ KÍP SỐ 1: QUY TẮC ĐỒ BƠI
Những vùng được đồ bơi che là vùng riêng tư. Không ai được chạm vào, trừ khi bác sĩ khám bệnh với ba mẹ ở bên cạnh!

⚡ BÍ KÍP SỐ 2: TIẾNG HÉT SIÊU THANH
Nếu ai đó làm mình khó chịu, hãy hét thật to: "KHÔNG! CON KHÔNG THÍCH!"

⚡ BÍ KÍP SỐ 3: CHẠY SIÊU TỐC
Nếu cảm thấy không an toàn, hãy chạy đến chỗ có người lớn tin tưởng ngay!

⚡ BÍ KÍP SỐ 4: KỂ CHO NGƯỜI LỚN
Luôn kể cho ba mẹ, thầy cô hoặc người lớn tin tưởng biết nếu có ai làm mình sợ hoặc khó chịu.

🏅 Cam kết của Siêu Anh Hùng:
"Mình sẽ yêu thương và bảo vệ cơ thể mình!"

Các bạn đã sẵn sàng trở thành Siêu Anh Hùng chưa nào? 🌟`,
    image: "/blog-3.png",
    author: "Wonder",
    date: "25 Th9",
  },
];

const postsEn: BlogPost[] = [
  {
    id: 1,
    title: "Learning to Love & Respect Myself 💕",
    excerpt:
      "Discover the amazing wonders of your own body through cute stories, positive affirmation, and fun activities!",
    content: `🌈 Hello young friends! Today we will explore something wonderful and super fun: our very own BODY!

🎈 Did you know? Your body is like a magnificent magical house! Every single part has an extraordinary job:
• Eyes to see the blue sky and colorful flowers 👀
• Ears to hear melodious birdsong 🎵
• Arms to give big warm hugs to family 🤗
• Legs to run, play, and meet friends at school 🏃

💖 Most importantly: Your body belongs strictly to YOU, and you hold every power to protect it!

🌟 Always remember these 3 magic rules:
1. I love and appreciate my body
2. I know how to keep my body clean and safe
3. I will speak up to trusted adults whenever someone makes me feel uneasy

You are truly amazing! 🌟`,
    image: "/blog-1.png",
    author: "Wonder",
    date: "Sep 20",
  },
  {
    id: 2,
    title: "10 Cute Questions Kids Ask About Their Bodies ✨",
    excerpt:
      "Innocent questions kids ask about growing up, and how parents can answer with warmth and scientific accuracy!",
    content: `🎀 Dear parents, kids have so many curious questions!

Children are naturally inquisitive. Here are top everyday questions and child-friendly answers:

1. 🤔 "Why are boys and girls different?"
→ Just like flowers come in various shapes and colors, human bodies have natural, wonderful diversity!

2. 🛁 "Why do we shower every day?"
→ To keep our protective skin barrier clean, energized, and strong like superheroes!

3. 👶 "Where do babies come from?"
→ Babies grow safely inside a mother's womb, surrounded by love before birth!

4. 🔒 "What are private zones?"
→ These are areas covered by your swimsuit; strictly yours to care for and protect!

5. 🤝 "When is hugging others okay?"
→ When both individuals are happy, comfortable, and mutually agree!

💬 Parent Tip: Respond with a calm, gentle tone and simple, age-appropriate words! 💕`,
    image: "/blog-2.png",
    author: "Wonder",
    date: "Sep 22",
  },
  {
    id: 3,
    title: "I Am My Own Superhero! 🦸",
    excerpt:
      "Essential self-defense and personal protection secrets every young explorer should know!",
    content: `🦸‍♀️ WELCOME LITTLE SUPERHEROES! 🦸‍♂️

Today, we will master our superhero protection secrets!

⚡ SUPER SECRET 1: THE SWIMSUIT RULE
Parts covered by your swimsuit are your private zones. No one may touch or photograph them, except medical exams with parents present!

⚡ SUPER SECRET 2: THE SUPER POWER VOICE
If anyone makes you feel uncomfortable, shout with confidence: "NO! STOP IT RIGHT NOW!"

⚡ SUPER SECRET 3: THE TURBO ESCAPE
If a situation feels unsafe, step or run away toward safe, crowded places immediately!

⚡ SUPER SECRET 4: TELL YOUR TRUST TEAM
Always share your feelings with parents, teachers, or trusted adults if something troubles you.

🏅 Superhero Oath:
"I will love, respect, and protect my body at all times!"

Are you ready to be a superhero? 🌟`,
    image: "/blog-3.png",
    author: "Wonder",
    date: "Sep 25",
  },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { t, isVi } = useLanguage();

  const posts = isVi ? postsVi : postsEn;

  const colors = [
    {
      border: "border-[#22d3ee]",
      bg: "bg-[#ecfeff]",
      accent: "text-[#0891b2]",
      btnBg: "bg-[#22d3ee]",
    },
    {
      border: "border-[#facc15]",
      bg: "bg-[#fefce8]",
      accent: "text-[#ca8a04]",
      btnBg: "bg-[#facc15]",
    },
    {
      border: "border-[#c084fc]",
      bg: "bg-[#faf5ff]",
      accent: "text-[#9333ea]",
      btnBg: "bg-[#c084fc]",
    },
  ];

  return (
    <>
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {t("blog.title")}
              </h2>
              <p className="text-gray-600 max-w-xl">{t("blog.subtitle")}</p>
            </div>
            <a
              href="#blog"
              className="hidden md:flex items-center gap-2 text-gray-600 font-bold hover:text-brand-purple transition-colors">
              {t("common.viewDetails")} <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const color = colors[index % 3];

              return (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`group relative ${color.bg} rounded-[2rem] p-5 border-4 ${color.border} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer`}>
                  {/* Decorative corner */}
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 ${color.btnBg} rounded-full opacity-50`}></div>

                  <div className="h-52 rounded-2xl overflow-hidden mb-5 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-3 left-3 ${color.bg} backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black ${color.accent} border-2 ${color.border}`}>
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-800 mb-2 flex-grow group-hover:text-brand-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <button
                      className={`flex items-center gap-2 ${color.accent} text-sm font-black hover:gap-4 transition-all`}>
                      {t("blog.readMore")}
                      <div
                        className={`w-8 h-8 rounded-full ${color.btnBg} text-white flex items-center justify-center`}>
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}>
          <div
            className="bg-gradient-to-br from-[#fef7ff] via-white to-[#f0fdfa] rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-brand-purple/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Header Image */}
            <div className="relative h-48 md:h-56">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              {/* Decorative shapes */}
              <div
                className="absolute top-4 left-4 w-6 h-6 bg-brand-yellow rounded-full animate-bounce"
                style={{ animationDuration: "2s" }}></div>
              <div
                className="absolute top-12 left-8 w-4 h-4 bg-brand-purple rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}></div>

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg">
                <X size={22} className="text-gray-700" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] relative">
              {/* Decorative background elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-5 w-16 h-16 bg-brand-purple/10 rounded-full blur-2xl"></div>

              {/* Meta info badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-brand-purple to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {selectedPost.author}
                </span>
                <span className="bg-gradient-to-r from-brand-yellow to-orange-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {selectedPost.date}
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {t("common.minutes")}
                </span>
              </div>

              {/* Content with styled paragraphs */}
              <div className="space-y-4">
                {selectedPost.content?.split("\n").map((line, i) => {
                  // Style headings differently
                  if (
                    line.startsWith("🌟") ||
                    line.startsWith("💖") ||
                    line.startsWith("⚡") ||
                    line.startsWith("🏅")
                  ) {
                    return (
                      <div
                        key={i}
                        className="bg-gradient-to-r from-brand-lightPurple/50 to-transparent p-4 rounded-2xl border-l-4 border-brand-purple">
                        <p className="text-gray-800 font-bold text-lg">
                          {line}
                        </p>
                      </div>
                    );
                  }
                  // Style list items with bullets
                  if (line.startsWith("•") || line.startsWith("→")) {
                    return (
                      <div key={i} className="flex items-start gap-3 ml-4">
                        <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700 leading-relaxed">
                          {line.replace("•", "").replace("→", "")}
                        </p>
                      </div>
                    );
                  }
                  // Style numbered items
                  if (line.match(/^\d+\./)) {
                    return (
                      <div
                        key={i}
                        className="bg-white/60 backdrop-blur p-4 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {line}
                        </p>
                      </div>
                    );
                  }
                  // Empty lines
                  if (!line.trim()) return null;
                  // Regular paragraphs
                  return (
                    <p
                      key={i}
                      className="text-gray-700 leading-relaxed text-base">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gradient-to-r from-brand-lightPurple/30 via-white to-cyan-50/30 border-t border-gray-100 flex justify-center gap-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-gradient-to-r from-brand-purple to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                <span>{t("blog.close")}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
