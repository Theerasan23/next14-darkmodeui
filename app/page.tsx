
import Image from "next/image";
import { thememode } from "./(action)/api/colormode/setcolormode";
import Logo from "../public/butterfly.png";

export default function Home() {

  const mode = thememode();

  return (
    <div >
      <div className="flex justify-center items-end h-96 bg-fixed bg-cover bg-parallax z-0">
          <div className="bg-black/5 text-[70px] font-bold p-4 rounded-md flex
            justify-center items-center text-white md:backdrop-blur-sm backdrop-blur-md z-0
            w-full h-full ">
          
              welcome
            </div>
      </div>
      <div className="flex justify-center py-3 uppercase">
        <h1 className="text-2xl"> next14 responsive website</h1>
      </div>

      <div>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis soluta inventore corporis animi reprehenderit maiores ex rerum recusandae aliquam sequi earum unde, ea vel error libero accusantium sed dolorum eveniet.
        Rerum porro quidem, obcaecati consectetur aut debitis expedita odio in impedit neque labore cupiditate quaerat similique, veniam aliquam voluptatum sit eos quis voluptatem est tempore! Illum dolor quos pariatur minima.
        Eligendi aliquam, amet molestias magnam nostrum vitae cumque ipsa veniam dolores officia ad libero a vero nam maiores fugit aut error assumenda nemo qui eum. Odio dolore reiciendis commodi labore!
        Dolor voluptates saepe cupiditate nostrum delectus! Error provident, tenetur odio laboriosam dolorum pariatur. Sapiente error similique, deleniti alias numquam fugit ab. Iste, error alias repellat aperiam magni officiis mollitia soluta!
        Blanditiis repellat dolor itaque corporis numquam. Facilis unde corrupti, debitis dolores maiores dicta animi ex sit architecto illum magni doloremque nobis fugiat expedita placeat atque. Est corrupti harum in laborum?
        Beatae optio accusantium perferendis in ipsa laudantium quibusdam unde dolorum laboriosam mollitia, voluptate et quos temporibus, ipsum itaque eveniet similique soluta dicta velit? Est eveniet veritatis dolorum saepe similique voluptatum!
        Voluptates, architecto! Consequatur explicabo minima ea impedit inventore aut, laudantium error enim vero in quo ipsam similique quasi debitis ullam voluptatum, provident pariatur id est delectus veritatis itaque, accusamus nesciunt!
        Officia aliquid tempore maiores quo debitis accusantium, inventore natus reprehenderit dolor, vero hic numquam cum minus quae aspernatur iusto deserunt eius et eaque, ipsa sunt. Iste dolorem autem blanditiis quasi!
        Officia quibusdam quidem id harum iusto quas sequi aspernatur quasi corrupti voluptates consequatur voluptatum natus, totam ad culpa. Sint earum natus debitis aliquam ratione reprehenderit, voluptatibus voluptate tempore odio dolores?
        Facere iste molestias autem provident repellendus recusandae et ullam maiores eveniet ab quos non sunt earum totam, cupiditate atque voluptatum fugit expedita facilis cum architecto sed! Nemo cumque quasi voluptatum.
        Veniam, harum officiis corrupti debitis, praesentium iste repudiandae eveniet, possimus nesciunt cumque porro ut iusto natus aperiam quod delectus assumenda quibusdam dicta maiores non! Hic esse iste alias voluptates possimus.
        Cum accusantium dolor soluta vitae iusto commodi? Ab suscipit praesentium esse vel est. Rerum consequatur laborum debitis ratione blanditiis repellat beatae soluta possimus officiis minima, praesentium dicta, dolore voluptatibus natus!
        Nemo sunt, fugit, quod ipsa consequatur dolores itaque sit nisi commodi nostrum ipsum nobis qui quas vitae architecto iusto fuga natus, impedit voluptatem nesciunt. Magni aspernatur odit delectus culpa aut?
        Delectus enim nemo debitis, hic earum quos asperiores sunt tempora? Facere nobis saepe quisquam deserunt assumenda, eos expedita voluptas nemo doloribus itaque quis officia illo delectus accusantium tenetur porro vitae.
        Explicabo accusantium nobis aliquid, quaerat voluptatum quidem magni ducimus quo sunt similique repudiandae, suscipit a ullam magnam doloribus omnis dolorem. Laudantium quo quod quas magnam placeat exercitationem. Illum, quisquam perferendis?
        Nobis, quo nam facilis suscipit quia fugiat quas itaque asperiores officiis hic quaerat maiores odit ad blanditiis, beatae voluptatum officia eligendi, molestiae sint. A atque voluptas, commodi rerum omnis nesciunt.
        Quaerat voluptatem fugit dolores quidem rerum, earum alias nobis, quibusdam tempora dolore cum voluptatibus magnam omnis sequi suscipit quo! Excepturi veritatis perspiciatis animi sapiente, amet libero aut expedita sed fugit?
        Modi molestiae minima blanditiis quaerat! Porro, assumenda nostrum reiciendis error praesentium pariatur repellendus dolores atque voluptatibus necessitatibus aliquam odit consequuntur, officia iusto explicabo. Debitis, eligendi! Beatae impedit officiis provident nobis.
        Obcaecati amet laborum maiores rerum, eius soluta odit sit, in quaerat fuga repudiandae tenetur, vitae velit ullam reprehenderit nemo quibusdam. Harum, molestiae odit iure alias amet magnam nesciunt praesentium earum.
        Incidunt nulla alias, molestiae velit repudiandae, natus accusamus quod similique officiis praesentium aperiam impedit blanditiis, dolores quo. Necessitatibus numquam eligendi explicabo blanditiis eos magnam repellat itaque sunt delectus maxime! Reprehenderit? </p>
      </div>
    </div>
  );
}
