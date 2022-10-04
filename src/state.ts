import { state, type State } from "poxi";

type RSS = {title: string, url: string}
type Schema = { entries: Array<RSS>, selected: RSS };
export const getState = () => state<Schema>();
export const getEntries = () => getState().getArray("entries")
export const getSelected = () => getState().get("selected")

export function onCreate(state: State<Schema>) {
  state.set({ entries: [{title: "NRK nyheter", url: "https://www.nrk.no/toppsaker.rss"}, //funker
  {title: "The Sun", url: "https://www.thesundaily.my/rss/home"}, //funker
  {title: "Yahoo News", url: "https://web-production-32e6.up.railway.app/https://news.yahoo.com/rss"}, //funker
  {title: "IFP News", url: "https://web-production-32e6.up.railway.app/https://ifpnews.com/feed/"}, //funker
  {title: "The Statehood DC", url: "https://web-production-32e6.up.railway.app/https://www.statehooddc.com/feed/"}, //funker
  {title: "Global Press Journal", url: "https://web-production-32e6.up.railway.app/https://globalpressjournal.com/feed/"}, //funker
  {title: "ABC News", url: "https://web-production-32e6.up.railway.app/https://www.abc.net.au/news/feed/4535882/rss.xml"}, // funker
  {title: "UN News", url: "https://news.un.org/feed/subscribe/en/news/all/rss.xml"}, //funker
  {title: "The Internet Protocol", url: "https://web-production-32e6.up.railway.app/https://internetprotocol.co/rss/"}, //funker
  {title: "HGS Media Plus", url: "https://web-production-32e6.up.railway.app/https://hgsmediaplus.com/feed/"}, //funker
  {title: "News24", url: "https://web-production-32e6.up.railway.app/https://feeds.24.com/articles/news24/TopStories/rss"}, //funker
  {title: "VG", url: "https://web-production-32e6.up.railway.app/https://www.vg.no/rss/feed"}, //funker
  {title: "Daily Express", url: "https://web-production-32e6.up.railway.app/https://feeds.feedburner.com/daily-express-news-showbiz"}, //funker
  {title: "The Union Journal", url: "https://web-production-32e6.up.railway.app/https://www.theunionjournal.com/feed/"}, //funker
  {title: "Wired", url: "https://www.wired.com/feed/rss"}, //funker
  {title: "The Verge", url: "https://www.theverge.com/rss/index.xml"}, //funker
  {title: "Toronto Star", url: "https://web-production-32e6.up.railway.app/https://www.thestar.com/content/thestar/feed.RSSManagerServlet.articles.news.world.rss"}, //funker
  {title: "The Los Angeles Times", url: "https://web-production-32e6.up.railway.app/https://www.latimes.com/world/rss2.0.xml"}, //funker
  {title: "Daily Mirror", url: "https://web-production-32e6.up.railway.app/https://www.mirror.co.uk/news/world-news/?service=rss"}, //funker
  {title: "Aftenposten", url: "https://www.aftenposten.no/rss/"}, //funker
  {title: "The Independent", url: "https://web-production-32e6.up.railway.app/https://www.independent.co.uk/news/world/rss"}, //funker
  {title: "TV2 Nyheter", url: "https://www.tv2.no/rest/cms-feeds-dw-rest/v2/cms/article/nyheter"}, //funker
  {title: "The World Assosiation of Newspapers", url: "https://web-production-32e6.up.railway.app/https://wan-ifra.org/news/feed/"}, //funker
  {title: "Ney York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"}, //funker
  {title: "Below the Truth", url: "https://web-production-32e6.up.railway.app/https://www.blowthetruth.com/feeds/posts/default"}, //funker, men skaper teit sjekk i fetch
  // {title: "Reuters", url: "https://cdn.feedcontrol.net/8/1114-wioSIX3uu8MEj.xml"}, //utdatert
  // {title: "New Europe", url: "https://web-production-32e6.up.railway.app/https://www.neweurope.eu/category/world/feed/"}, //feil formatering i tekst
  // {title: "Sky News", url: "https://web-production-32e6.up.railway.app/https://feeds.skynews.com/feeds/rss/home.xml"}, //feil formatering i tekst
  // {title: "Radarr Africa", url: "https://web-production-32e6.up.railway.app/https://radarr.africa/feed/"}, //feil formatering i tekst
  // {title: "Channel News Asia", url: "https://web-production-32e6.up.railway.app/https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml"}, //feil formatering i tekst
  // {title: "Dkoding", url: "https://web-production-32e6.up.railway.app/https://www.dkoding.in/feed/"}, //feil formatering i tekst
  // {title: "Digitalive.World", url: "https://web-production-32e6.up.railway.app/https://digitalive.world/feed/"}, //feil formatering av tekst
  // {title: "Kuwait Today", url: "https://web-production-32e6.up.railway.app/https://kwttoday.com/feed/"}, //feil formatering i tekst
  // {title: "The Local Spain", url: "https://feeds.thelocal.com/rss/es"}, //feil formatering i tekst
  // {title: "The Eastern Herald", url: "https://web-production-32e6.up.railway.app/https://www.easternherald.com/feed/"}, //feil formatering i tekst
  // {title: "World Weekly", url: "https://web-production-32e6.up.railway.app/https://worldweeklynews.com/feed/"}, //feil formatering i tekst
  // {title: "South China Morning Post", url: "https://web-production-32e6.up.railway.app/https://www.scmp.com/rss/91/feed"}, //feil formatering i tekst
  // {title: "Dagbladet", url: "https://web-production-32e6.up.railway.app/https://www.dagbladet.no/?lab_viewport=rss"}, //feil formatering i link
],
selected: {title: "NRK nyheter", url: "https://www.nrk.no/toppsaker.rss"}})};