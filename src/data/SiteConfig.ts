interface IAddress {
  line1: string;
  line2: string;
  line3: string;
  state: string;
  country: string;
}
interface ISiteConfig {
  adminEmail: string;
  phone: string;
  whatsAppNo: string;
  address: IAddress;
}
const SiteConfig: ISiteConfig = {
  adminEmail: "admin@akruticonsulting.com",
  phone: "+44 7949207064",
  whatsAppNo: "+44 7949207064",
  address: {
    line1: "5 Kings Reach",
    line2: "Slough",
    line3: "BerkShire",
    state: "Slough",
    country: "United Kingdom",
  },
};
export default SiteConfig;
