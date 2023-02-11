import RecipeCard from "../components/RecipeCard"

export default {
    title: "Components/Recipe Card",
    component: RecipeCard,
}

const Template = args => <RecipeCard {...args} />

export const ChickenTikka = Template.bind({})
ChickenTikka.args = {
    imageSrc: "https://dishingouthealth.com/wp-content/uploads/2020/12/TofuTikkaMasala_Square3.jpg",
    width: 800,
    height: 400,
    border: 10,
    name: "Chicken Tikka Masala",
    subtext: "Best selling food dish in the UK",
    expirationDate: "February 13th, 2023",
}

export const SausageMarinara = Template.bind({})
SausageMarinara.args = {
    imageSrc: "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/penne-with-marinara-sauce-thyme-italian-sausage-recipe.jpg",
    width: 1000,
    height: 500,
    border: 15,
    name: "Sausage Marinara Pasta",
    subtext: "Nothing beats homemade",
    expirationDate: "April 25th, 2024",
}

export const VOIDSoup = Template.bind({})
VOIDSoup.args = {
    imageSrc: "https://justfunfacts.com/wp-content/uploads/2021/03/black-2.jpg",
    width: 756,
    height: 489,
    border: 15,
    name: "Void Soup",
    subtext: "Embrace the void",
    expirationDate: "never",
}

export const BrightSoup = Template.bind({})
BrightSoup.args = {
    imageSrc: "https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?cs=srgb&dl=pexels-gdtography-950241.jpg&fm=jpg",
    width: 400,
    height: 350,
    border: 15,
    name: "Bright Soup",
    subtext: "It's like you just turned on a flashlight",
    expirationDate: "at the heat death of the universe",
}
