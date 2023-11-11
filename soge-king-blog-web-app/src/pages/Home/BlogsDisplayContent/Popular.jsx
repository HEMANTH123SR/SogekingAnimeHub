import React from 'react'
import BlogCard from '../../../components/BlogCard'

export default function Popular() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
        {[
        {
          id:1,
          title: "Myths of maga",
          image:
            "https://blog.alltheanime.com/wp-content/uploads/2023/10/totoro-1536x864.jpg",
          date: "November 7, 2023",
          paragraph: `
Young V&A, formerly the Museum of Childhood, opened its doors again on 1st July 2023 after a revamp that took seven years to plan and design. This is its first exhibition since the opening, and every aspect of its presentation and marketing has been engineered to establish itself with its target audience – children and, just as importantly, their parents.

That’s a tough brief. To make an exhibition that can interest people aged from toddler to grandparent, across such a range of interests, capacities and attention spans, is never easy.
`,
        },
        {
          id:2,
          title: "Exploring Studio Ghibli",
          image: "https://hi.all10soft.com/images/upload/1/f/anime-studio-windows-10-screenshot.jpg",
          date: "November 7, 2023",
          paragraph: `
            Dive into the enchanting world of Studio Ghibli! Young V&A, formerly the Museum of Childhood, reopened its doors on July 1, 2023, after a seven-year revamp. The first exhibition, featuring Studio Ghibli's masterpieces, aims to captivate audiences of all ages.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
            Dive into the enchanting world of Studio Ghibli! Young V&A, formerly the Museum of Childhood, reopened its doors on July 1, 2023, after a seven-year revamp. The first exhibition, featuring Studio Ghibli's masterpieces, aims to captivate audiences of all ages.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:3,
          title: "Top 10 Anime of the Year",
          image: "https://animegalaxyofficial.com/wp-content/uploads/2022/04/png_20220407_234200_0000.png",
          date: "November 8, 2023",
          paragraph: `
            Discover the anime gems of the year! From action-packed adventures to heartwarming stories, this blog explores the top 10 anime that have left a lasting impact on fans in 2023.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:4,
          title: "Unveiling Hidden Anime Gems",
          image: "https://shareiitnow.b-cdn.net/wp-content/uploads/2020/05/hidden-gems-anime-3.jpg",
          date: "November 9, 2023",
          paragraph: `
            Journey into the world of underrated anime! This blog sheds light on hidden gems that might have slipped under your radar. Uncover unique storytelling and unforgettable characters.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:5,
          title: "The Art of Anime Soundtracks",
          image: "https://blog.alltheanime.com/wp-content/uploads/2023/08/wotc6-300x236.jpg",
          date: "November 10, 2023",
          paragraph: `
            Immerse yourself in the melodies of anime! Explore the artistry behind anime soundtracks, from iconic openings to emotional endings. Discover how music enhances the anime viewing experience.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:6,
          title: "Behind the Scenes of Anime Production",
          image: "https://external-preview.redd.it/behind-the-scenes-look-at-the-production-of-attack-on-titan-v0-AVBNtEa5P_HrFN87NUQm-5HyhLajrB6jZIhpkJgrANQ.jpg?width=640&crop=smart&auto=webp&s=ac47513117a67bc4c46b7d84dd65287f1989ffa9",
          date: "November 11, 2023",
          paragraph: `
            Go behind the curtain of anime creation! This blog delves into the intricate process of anime production, from concept to screen. Gain insights into the hard work and creativity that bring anime to life.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:7,
          title: "Evolution of Anime Art Styles",
          image: "https://external-preview.redd.it/behind-the-scenes-look-at-the-production-of-attack-on-titan-v0-AVBNtEa5P_HrFN87NUQm-5HyhLajrB6jZIhpkJgrANQ.jpg?width=640&crop=smart&auto=webp&s=ac47513117a67bc4c46b7d84dd65287f1989ffa9",
          date: "November 12, 2023",
          paragraph: `
            Witness the evolution of anime art! From classic to modern, explore how anime art styles have transformed over the years. Appreciate the diversity and innovation within the world of anime aesthetics.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:8,
          title: "Anime Merchandise Must-Haves",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruRFJ5xAS6RCwggrlChJUnOIAYWbKFI-gxw&usqp=CAU",
          date: "November 13, 2023",
          paragraph: `
            Elevate your anime collection! Uncover the must-have merchandise for every anime enthusiast. From figurines to posters, this blog guides you through building an impressive anime shrine.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:9,
          title: "Anime and Cultural Influence",
          image: "https://i0.wp.com/tokyotreatblog.wpcomstaging.com/wp-content/uploads/2021/05/79cbc5a82a5fdf72abd42bae2d73bbd0fe875e35_anime.jpg?fit=610%2C361&ssl=1",
          date: "November 14, 2023",
          paragraph: `
            Explore the cultural impact of anime! This blog examines how anime transcends borders, influencing global pop culture. Discover the cultural references embedded in your favorite anime series.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:10,
          title: "Anime Recommendations for Beginners",
          image: "https://japancitytour.com/wp-content/uploads/2020/11/anime.jpeg",
          paragraph: `
            New to anime? Start your journey with these recommendations! Whether you love action, romance, or fantasy, this blog provides a curated list of anime that's perfect for beginners.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `,
        },
        {
          id:11,
          title: "Anime Fandom: A Global Community",
          image: "https://cdn.oneesports.gg/cdn-data/2023/06/Anime_OnePiece_Wallpaper_StrawHatPirates_Complete.jpg",
          date: "November 16, 2023",
          paragraph: `
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
            Join the global anime community! This blog celebrates the diverse and passionate fandom that spans across the world. Discover how anime connects fans from different cultures and backgrounds.
          `}
       
      ].map((data) => (
        <div className="flex justify-center">
        <BlogCard
          title={data.title}
          blogImg={data.image}
          Date={data.date}
          blogParagraph={data.paragraph}
          key={data.id}
        />
        </div>
      ))}
   
    </div>
  )
}


        
       
