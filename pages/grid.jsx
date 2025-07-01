
import { Image } from "@chakra-ui/react"

let image = ["https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
  , "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
  , "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
  , "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
  , "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg",

]

const Grid = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
      {image.map((e, i) => {
        return (
          <Image src={e} key={i} />
        )
      })}
    </div>
  )
}

export default Grid