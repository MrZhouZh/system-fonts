import { Select } from 'antd'
import { MACOS_FONTS } from './utils/const'

import './App.css'

const { Option } = Select;

function App() {
  return (
    <>
      <div>
        <Select
          style={{ width: `200px` }}
          showSearch
          onChange={(value) => {
            document.body.style = `font-family: ${value || ''}`
          }}
          allowClear
        >
          {MACOS_FONTS.map((font) => (
            <Option key={font} style={{ fontFamily: font }}>{font}</Option>
          ))}
        </Select>
        {/* <select onChange={(e) => {
          console.log(e.target.value)
          const font = e.target.value
          document.body.style = `font-family: ${font}`
        }}>
          {MACOS_FONTS.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select> */}
      </div>
      <div className="card">
        <p>
          body
          font-family
          Lorem ipsum dolor sit amet, eos id quem appetere iudicabit, vitae possit facilis eos at. Ex sit melius laboramus, autem commodo erroribus et sea. Pro ei omnesque scripserit. Posidonium instructior eum in, illud definiebas sit an. Vim at vero perfecto deseruisse, nec denique adversarium necessitatibus ea.

          Modo deserunt euripidis id ius. Mei in viderer detraxit, ne idque animal epicuri sed. Mel everti platonem ne, eu vim oblique iracundia, mel cu dico solet. Habeo semper neglegentur ei sed, vix id dicam antiopam, ad nec augue eruditi ponderum.

          Hinc modus gloriatur ei pri. Nec voluptaria rationibus moderatius et, adversarium ullamcorper philosophia te duo. Assum argumentum pri cu, sed eius nulla oporteat et, no pro putant meliore epicurei. Vel esse quot contentiones te. Falli perpetua qui at, quando accusam deserunt sit id, cu legere electram vituperatoribus quo. Eros noluisse expetenda ex est, repudiandae definitiones id vix.

          Ut per nonumy detraxit, augue nostro audiam no his. Agam abhorreant sea et, sonet denique necessitatibus has in. Cu has stet nobis definitiones, his ei labitur probatus. Nec quem invenire mediocrem ne, ei vero appetere his.

          Ea scripta constituto mediocritatem ius. Eos ea laboramus eloquentiam, sed noster efficiantur te, ne his putent repudiare deterruisset. Eu eum ullum augue, cum mutat propriae patrioque ei, homero sanctus debitis usu ne. Cu veniam quaestio democritum ius. Munere molestiae est id. Sint cetero ut his, ut cum atomorum antiopam.
        </p>

        <p>
          約首田員品暮要縄軽断汐聞原。夕大字載対景表港敗年中容定興延全。万退面掲聞人恵書見禁素受期明変。審重未年荘年芸族見丈力手嘉囲業在車。盤五静和路政画塁語廟所入心。電足系海博多米越経陸儀船際。花棟提方更探続右住親状済始説報変。図企出中保町文年健編訃断札。希値川鮮様害代一楽会知絶。支覧年館根復校場三産調質革訃岡姿護混。

          真生時午比玉坊最禁獲碁死就天属員。山処訴質歯内寺棋質北町日演終合。部娘社就続有内内士全周件適離島役掲権。時調止著能定写段財繁委類町部博難共豊制。朝白領新子際焼初住態来者採第化襲的会断時。再見上納公載社安本固込広受規金家名内議態。木空大再源周条百真級構囲重日効恋。認京認購応台団議表椅転業押変換制春紙定衆。

          残以目日師戦続国呼朝地金手売。花書女場域上落旅導状貴同内例的名校。買害重止室君仙果三際治安億真土売討宇掲芸。作細暗茨供舎無審療型認律百疑属。真川補難善理雨約定県十期今毎。頭格立歩著禁力酢宅爆夕補億開国択要広知。充個逮返麻芸上京北北現版権指。本権典証房属政長復経供緯工得省。文抗大転区認持整既域転止朝提佳。

          案逃銀浸釣圧大載撃歳上加感環亮。行落江用賛体台更度化自情牧渡名済一更雲。全率提家選項最書党月然大歩開住克県断価。提情売合手画後散供試能通配見。信層部騒報画街本南属者勝方万関葉。役町開展報投玉回語徳点助基。際広作方権目開記主開給瀬動日多者。向目対年売柔芸大初半着検度夏待減身。会的靖計螢信者副環老天舞就特食壮界分高。

          止無系外首中苗直式応主碁度七文。毎首助報載載歳稿見聞読辺衛佐。掲載安定激生民林本債邦軍写万応氷。作修最界能判案利易意被洲代西属癖。戸代化代性林号発丸政惑図兆復作聞。入権惑辞同済阪中合安相社間重拡提気込量暮。懲道日機懸第目高教俊剣合都対更訃知東騎技。無幕由通前望公化遊口中田供第発意内。禁親質毎嗅算況件言産供属犯革企盛。

          跡補火別外家応定連何刊開常更著府着。障上末犯全全旅線政廃季要教社。会時性敬厚会部元特掃受文約期注。見整関長浩妻況真茶宇川動物間生外必要得極。九級職収客北昨止贈弁表公象大泉分。読試日研産毎旅問巡旅競室獲。社給哲居沢毎髪種応集津煮立環案閣代。守目投必見枝回桂野躍井手。細投掲参齢養保考巳育純取西経。久扇早加井済東働習算変技。

          全片移継局調聞安表再年治半。会流供需年器安隠図作選音任体。撤入法的長本質局必徳部点場躍。金聞応報戦禁体出属現過新下生区暖両。本膨理特跡住号求調請表試。略出画家埋教注見時与載扱認幅十芸迎。記安住元下掲応相意近発注予民初民新前。海対素均外西聞合断飯能図場議代本重。会掲図米来首込楽定伺両記。囲東佐還専惑程黙去複着権夏掲吉企。

          央色購長旅顔陣県伝映初後。結軍学治氏法西十法右結者都動術論。能更棚座合相外社一今属体独母標。初遠移美瞬安録企知速場権初囲。格観立県件七心応示法賀経変完解。務日載白囲氷歌約民自名安筆謙一医数教。初芸討非秒名秘入図過像問全減。押更将可安目写著京者橋政職。結整生起悪理放事書危船天受藤。質生読禁調無算直克重回株畳理本査故上続。

          塚顔長転線白秋衝害夜写人次岩航断企挙。会準乗性必者地投見語電身転。事直化党浦年治訴道万化光強告理落破毎。博児経報不難文芸相谷氏由止営就用総米勤。阪現氏権新将注賞初低予人頭印情読柴検。遺里造会喜攻来生善恐式自巻。聞場私咲位際松紙治頼塔政首訃細判。犯支本活立関軍広育著摩含版辞外市陸重連。言好細企載金最逃食年要事願平布文。

          売流断確託法約閣林並視工点映専私。朗込匹反費変弘向資段土見本家全合。代仙申野口陸工舎春講一村作提発優記議原。文社荒席女工健勢圧提分変縄融証意白人振。民経式技佐展視特同公村刊稚印国来。過元世世情張牧西祥人拡覇方安旅続区要帯標。景求題実参済青細書生活向無方忘。師本誘社筑元起載散裁庭真素点局歩事亡。abcdefghijklmnopqrstuvwxyz
        </p>
      </div>
    </>
  )
}

export default App
