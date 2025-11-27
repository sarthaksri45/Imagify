import logo from './logo.svg'
import profile_img1 from './profile_img1.jpg'
import profile_img2 from './profile_img2.jpg'
import profile_img3 from './profile_img3.jpg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'


export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img1,
        name:'Nitin Choudhary',
        role:'Graphic Designer',
        stars:5,
        text:`This platform consistently delivers high-quality visuals that look like they were crafted by a skilled designer. It saves me hours every week. Truly a great expierence. I recommend it everyone.`
    },
    {
        image:profile_img2,
        name:'Sourav Thakur',
        role:'Content Creator',
        stars:4,
        text:`The AI understands prompts better than any other generator I’ve tried. The results are crisp, creative, and require almost zero editing. Highly recommended for professionals.`
    },
    {
        image:profile_img3,
        name:'Shivam Tyagi',
        role:' Graphic Designer',
        stars:3,
        text:`Using this tool has completely transformed my workflow. The image quality is outstanding, and the speed is unbelievable. It has become an essential part of my daily design routine.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 5,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 10,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 20,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]