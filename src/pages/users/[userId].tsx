// import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
// import Button from '../../components/Button'
import CardBox from '../../components/CardBox'
// import CardBoxComponentEmpty from '../../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../../layouts/Authenticated'
// import NotificationBar from '../../components/NotificationBar'
import SectionMain from '../../components/Section/Main'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
// import TableSampleClients from '../../components/Table/SampleClients'
import { getPageTitle } from '../../config'
import { useSampleClients } from '../../hooks/sampleData'
import { useRouter } from 'next/router';
import { Client } from '../../interfaces'
// import social_media_icons from '/static/social-media-icons.png'
import {
  mdiAlert,
} from '@mdi/js'
import Icon from '../../components/Icon'

interface Transaction {
  id: number;
}

const UsersPage = () => {

  const { clients } = useSampleClients()

  console.log("clients", clients)

  const router = useRouter();

  const { userId } = router.query;

  const userDetails: Client | undefined = clients.find((item: Transaction) => item.id === Number(userId))

  console.log("userDetails", userDetails)

  const getFlagClass = (countryCode: string) => {
    switch (countryCode) {
      case 'Afghanistan':
        return 'fi-af';
      case 'Aland Islands':
        return 'fi-ax';
      case 'Albania':
        return 'fi-al';
      case 'Algeria':
        return 'fi-dz';
      case 'American Samoa':
        return 'fi-as';
      case 'Andorra':
        return 'fi-ad';
      case 'Angola':
        return 'fi-ao';
      case 'Anguilla':
        return 'fi-ai';
      case 'Antarctica':
        return 'fi-aq';
      case 'Antigua and Barbuda':
        return 'fi-ag';
      case 'Argentina':
        return 'fi-ar';
      case 'Armenia':
        return 'fi-am';
      case 'Aruba':
        return 'fi-aw';
      case 'Australia':
        return 'fi-au';
      case 'Austria':
        return 'fi-at';
      case 'Azerbaijan':
        return 'fi-az';
      case 'Bahamas':
        return 'fi-bs';
      case 'Bahrain':
        return 'fi-bh';
      case 'Bangladesh':
        return 'fi-bd';
      case 'Barbados':
        return 'fi-bb';
      case 'Belarus':
        return 'fi-by';
      case 'Belgium':
        return 'fi-be';
      case 'Belize':
        return 'fi-bz';
      case 'Benin':
        return 'fi-bj';
      case 'Bermuda':
        return 'fi-bm';
      case 'Bhutan':
        return 'fi-bt';
      case 'Bolivia':
        return 'fi-bo';
      case 'Bonaire, Sint Eustatius and Saba':
        return 'fi-bq';
      case 'Bosnia and Herzegovina':
        return 'fi-ba';
      case 'Botswana':
        return 'fi-bw';
      case 'Bouvet Island':
        return 'fi-bv';
      case 'Brazil':
        return 'fi-br';
      case 'British Indian Ocean Territory':
        return 'fi-io';
      case 'Brunei Darussalam':
        return 'fi-bn';
      case 'Bulgaria':
        return 'fi-bg';
      case 'Burkina Faso':
        return 'fi-bf';
      case 'Burundi':
        return 'fi-bi';
      case 'Cabo Verde':
        return 'fi-cv';
      case 'Cambodia':
        return 'fi-kh';
      case 'Cameroon':
        return 'fi-cm';
      case 'Canada':
        return 'fi-ca';
      case 'Cayman Islands':
        return 'fi-ky';
      case 'Central African Republic':
        return 'fi-cf';
      case 'Chad':
        return 'fi-td';
      case 'Chile':
        return 'fi-cl';
      case 'China':
        return 'fi-cn';
      case 'Christmas Island':
        return 'fi-cx';
      case 'Cocos (Keeling) Islands':
        return 'fi-cc';
      case 'Colombia':
        return 'fi-co';
      case 'Comoros':
        return 'fi-km';
      case 'Cook Islands':
        return 'fi-ck';
      case 'Costa Rica':
        return 'fi-cr';
      case 'Croatia':
        return 'fi-hr';
      case 'Cuba':
        return 'fi-cu';
      case 'Curaçao':
        return 'fi-cw';
      case 'Cyprus':
        return 'fi-cy';
      case 'Czech Republic':
        return 'fi-cz';
      case 'Côte d\'Ivoire':
        return 'fi-ci';
      case 'Democratic Republic of the Congo':
        return 'fi-cd';
      case 'Denmark':
        return 'fi-dk';
      case 'Djibouti':
        return 'fi-dj';
      case 'Dominica':
        return 'fi-dm';
      case 'Dominican Republic':
        return 'fi-do';
      case 'Ecuador':
        return 'fi-ec';
      case 'Egypt':
        return 'fi-eg';
      case 'El Salvador':
        return 'fi-sv';
      case 'Equatorial Guinea':
        return 'fi-gq';
      case 'Eritrea':
        return 'fi-er';
      case 'Estonia':
        return 'fi-ee';
      case 'Eswatini':
        return 'fi-sz';
      case 'Ethiopia':
        return 'fi-et';
      case 'Falkland Islands':
        return 'fi-fk';
      case 'Faroe Islands':
        return 'fi-fo';
      case 'Federated States of Micronesia':
        return 'fi-fm';
      case 'Fiji':
        return 'fi-fj';
      case 'Finland':
        return 'fi-fi';
      case 'France':
        return 'fi-fr';
      case 'French Guiana':
        return 'fi-gf';
      case 'French Polynesia':
        return 'fi-pf';
      case 'French Southern Territories':
        return 'fi-tf';
      case 'Gabon':
        return 'fi-ga';
      case 'Gambia':
        return 'fi-gm';
      case 'Georgia':
        return 'fi-ge';
      case 'Germany':
        return 'fi-de';
      case 'Ghana':
        return 'fi-gh';
      case 'Gibraltar':
        return 'fi-gi';
      case 'Greece':
        return 'fi-gr';
      case 'Greenland':
        return 'fi-gl';
      case 'Grenada':
        return 'fi-gd';
      case 'Guadeloupe':
        return 'fi-gp';
      case 'Guam':
        return 'fi-gu';
      case 'Guatemala':
        return 'fi-gt';
      case 'Guernsey':
        return 'fi-gg';
      case 'Guinea':
        return 'fi-gn';
      case 'Guinea-Bissau':
        return 'fi-gw';
      case 'Guyana':
        return 'fi-gy';
      case 'Haiti':
        return 'fi-ht';
      case 'Heard Island and McDonald Islands':
        return 'fi-hm';
      case 'Holy See':
        return 'fi-va';
      case 'Honduras':
        return 'fi-hn';
      case 'Hong Kong':
        return 'fi-hk';
      case 'Hungary':
        return 'fi-hu';
      case 'Iceland':
        return 'fi-is';
      case 'India':
        return 'fi-in';
      case 'Indonesia':
        return 'fi-id';
      case 'Iran':
        return 'fi-ir';
      case 'Iraq':
        return 'fi-iq';
      case 'Ireland':
        return 'fi-ie';
      case 'Isle of Man':
        return 'fi-im';
      case 'Israel':
        return 'fi-il';
      case 'Italy':
        return 'fi-it';
      case 'Jamaica':
        return 'fi-jm';
      case 'Japan':
        return 'fi-jp';
      case 'Jersey':
        return 'fi-je';
      case 'Jordan':
        return 'fi-jo';
      case 'Kazakhstan':
        return 'fi-kz';
      case 'Kenya':
        return 'fi-ke';
      case 'Kiribati':
        return 'fi-ki';
      case 'Kuwait':
        return 'fi-kw';
      case 'Kyrgyzstan':
        return 'fi-kg';
      case 'Laos':
        return 'fi-la';
      case 'Latvia':
        return 'fi-lv';
      case 'Lebanon':
        return 'fi-lb';
      case 'Lesotho':
        return 'fi-ls';
      case 'Liberia':
        return 'fi-lr';
      case 'Libya':
        return 'fi-ly';
      case 'Liechtenstein':
        return 'fi-li';
      case 'Lithuania':
        return 'fi-lt';
      case 'Luxembourg':
        return 'fi-lu';
      case 'Macau':
        return 'fi-mo';
      case 'Madagascar':
        return 'fi-mg';
      case 'Malawi':
        return 'fi-mw';
      case 'Malaysia':
        return 'fi-my';
      case 'Maldives':
        return 'fi-mv';
      case 'Mali':
        return 'fi-ml';
      case 'Malta':
        return 'fi-mt';
      case 'Marshall Islands':
        return 'fi-mh';
      case 'Martinique':
        return 'fi-mq';
      case 'Mauritania':
        return 'fi-mr';
      case 'Mauritius':
        return 'fi-mu';
      case 'Mayotte':
        return 'fi-yt';
      case 'Mexico':
        return 'fi-mx';
      case 'Moldova':
        return 'fi-md';
      case 'Monaco':
        return 'fi-mc';
      case 'Mongolia':
        return 'fi-mn';
      case 'Montenegro':
        return 'fi-me';
      case 'Montserrat':
        return 'fi-ms';
      case 'Morocco':
        return 'fi-ma';
      case 'Mozambique':
        return 'fi-mz';
      case 'Myanmar':
        return 'fi-mm';
      case 'Namibia':
        return 'fi-na';
      case 'Nauru':
        return 'fi-nr';
      case 'Nepal':
        return 'fi-np';
      case 'Netherlands':
        return 'fi-nl';
      case 'New Caledonia':
        return 'fi-nc';
      case 'New Zealand':
        return 'fi-nz';
      case 'Nicaragua':
        return 'fi-ni';
      case 'Niger':
        return 'fi-ne';
      case 'Nigeria':
        return 'fi-ng';
      case 'Niue':
        return 'fi-nu';
      case 'Norfolk Island':
        return 'fi-nf';
      case 'North Korea':
        return 'fi-kp';
      case 'North Macedonia':
        return 'fi-mk';
      case 'Northern Mariana Islands':
        return 'fi-mp';
      case 'Norway':
        return 'fi-no';
      case 'Oman':
        return 'fi-om';
      case 'Pakistan':
        return 'fi-pk';
      case 'Palau':
        return 'fi-pw';
      case 'Panama':
        return 'fi-pa';
      case 'Papua New Guinea':
        return 'fi-pg';
      case 'Paraguay':
        return 'fi-py';
      case 'Peru':
        return 'fi-pe';
      case 'Philippines':
        return 'fi-ph';
      case 'Pitcairn':
        return 'fi-pn';
      case 'Poland':
        return 'fi-pl';
      case 'Portugal':
        return 'fi-pt';
      case 'Puerto Rico':
        return 'fi-pr';
      case 'Qatar':
        return 'fi-qa';
      case 'Republic of the Congo':
        return 'fi-cg';
      case 'Romania':
        return 'fi-ro';
      case 'Russia':
        return 'fi-ru';
      case 'Rwanda':
        return 'fi-rw';
      case 'Réunion':
        return 'fi-re';
      case 'Saint Barthélemy':
        return 'fi-bl';
      case 'Saint Helena':
        return 'fi-sh';
      case 'Saint Kitts and Nevis':
        return 'fi-kn';
      case 'Saint Lucia':
        return 'fi-lc';
      case 'Saint Martin':
        return 'fi-mf';
      case 'Saint Pierre and Miquelon':
        return 'fi-pm';
      case 'Saint Vincent and the Grenadines':
        return 'fi-vc';
      case 'Samoa':
        return 'fi-ws';
      case 'San Marino':
        return 'fi-sm';
      case 'Sao Tome and Principe':
        return 'fi-st';
      case 'Saudi Arabia':
        return 'fi-sa';
      case 'Senegal':
        return 'fi-sn';
      case 'Serbia':
        return 'fi-rs';
      case 'Seychelles':
        return 'fi-sc';
      case 'Sierra Leone':
        return 'fi-sl';
      case 'Singapore':
        return 'fi-sg';
      case 'Sint Maarten':
        return 'fi-sx';
      case 'Slovakia':
        return 'fi-sk';
      case 'Slovenia':
        return 'fi-si';
      case 'Solomon Islands':
        return 'fi-sb';
      case 'Somalia':
        return 'fi-so';
      case 'South Africa':
        return 'fi-za';
      case 'South Georgia and the South Sandwich Islands':
        return 'fi-gs';
      case 'South Korea':
        return 'fi-kr';
      case 'South Sudan':
        return 'fi-ss';
      case 'Spain':
        return 'fi-es';
      case 'Sri Lanka':
        return 'fi-lk';
      case 'State of Palestine':
        return 'fi-ps';
      case 'Sudan':
        return 'fi-sd';
      case 'Suriname':
        return 'fi-sr';
      case 'Svalbard and Jan Mayen':
        return 'fi-sj';
      case 'Sweden':
        return 'fi-se';
      case 'Switzerland':
        return 'fi-ch';
      case 'Syria':
        return 'fi-sy';
      case 'Taiwan':
        return 'fi-tw';
      case 'Tajikistan':
        return 'fi-tj';
      case 'Tanzania':
        return 'fi-tz';
      case 'Thailand':
        return 'fi-th';
      case 'Timor-Leste':
        return 'fi-tl';
      case 'Togo':
        return 'fi-tg';
      case 'Tokelau':
        return 'fi-tk';
      case 'Tonga':
        return 'fi-to';
      case 'Trinidad and Tobago':
        return 'fi-tt';
      case 'Tunisia':
        return 'fi-tn';
      case 'Turkmenistan':
        return 'fi-tm';
      case 'Turks and Caicos Islands':
        return 'fi-tc';
      case 'Tuvalu':
        return 'fi-tv';
      case 'Türkiye':
        return 'fi-tr';
      case 'Uganda':
        return 'fi-ug';
      case 'Ukraine':
        return 'fi-ua';
      case 'United Arab Emirates':
        return 'fi-ae';
      case 'United Kingdom':
        return 'fi-gb';
      case 'United States Minor Outlying Islands':
        return 'fi-um';
      case 'United States of America':
        return 'fi-us';
      case 'Uruguay':
        return 'fi-uy';
      case 'Uzbekistan':
        return 'fi-uz';
      case 'Vanuatu':
        return 'fi-vu';
      case 'Venezuela':
        return 'fi-ve';
      case 'Vietnam':
        return 'fi-vn';
      case 'Virgin Islands (British)':
        return 'fi-vg';
      case 'Virgin Islands (U.S.)':
        return 'fi-vi';
      case 'Wallis and Futuna':
        return 'fi-wf';
      case 'Western Sahara':
        return 'fi-eh';
      case 'Yemen':
        return 'fi-ye';
      case 'Zambia':
        return 'fi-zm';
      case 'Zimbabwe':
        return 'fi-zw';
      case 'Ascension Island':
        return 'fi-sh-ac';
      case 'Basque Country':
        return 'fi-es-ct';
      case 'Canary Islands':
        return 'fi-ic';
      case 'Catalonia':
        return 'fi-es-ga';
      case 'Central European Free Trade Agreement':
        return 'fi-cefta';
      case 'Clipperton Island':
        return 'fi-cp';
      case 'Diego Garcia':
        return 'fi-dg';
      case 'East African Community':
        return 'fi-eac';
      case 'England':
        return 'fi-gb-eng';
      case 'Europe':
        return 'fi-eu';
      case 'Galicia':
        return 'fi-es-ga';
      case 'Kosovo':
        return 'fi-xk';
      case 'League of Arab States':
        return 'fi-arab';
      case 'Northern Ireland':
        return 'fi-gb-nir';
      case 'Pacific Community':
        return 'fi-pc';
      case 'Saint Helena':
        return 'fi-sh-hl';
      case 'Scotland':
        return 'fi-gb-sct';
      case 'Tristan da Cunha':
        return 'fi-sh-ta';
      case 'United Nations':
        return 'fi-un';
      case 'Wales':
        return 'fi-gb-wls';
      default:
        return '';
    }
  };

  // const flagClass = getFlagClass(userDetails.country);
  const flagClass = userDetails && userDetails.country ? getFlagClass(userDetails.country) : '';

  return (
    <>
      <style>
        https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/css/flag-icons.min.css
      </style>
      <Head>
        <title>{getPageTitle('Users Details')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton title="User Details" main></SectionTitleLineWithButton>
        <CardBox className="p-4 mb-6" hasTable>
          {userDetails && (
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Name</p>
                <p className='text-[22px] font-bold'>{userDetails.name}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">ID</p>
                <p>{userDetails.id}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg text-blue-500 font-semibold">Followers</p>
                <p className='text-[20px] font-bold'>{userDetails.followers}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg text-blue-500 font-semibold">Followings</p>
                <p className='text-[20px] font-bold'>{userDetails.followings}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Country</p>
                <p>{userDetails.country}
                  <span className={`fi ${flagClass} rounded-[3px] scale-x-[1.2] ml-2`} title={userDetails.country}></span>
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">City</p>
                <p>{userDetails.city}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Created</p>
                <p>{userDetails.created}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Willing to Travel</p>
                <p>{userDetails.willingToTravel !== undefined && (userDetails.willingToTravel === true ? "Yes" : "No")}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Type of Content</p>
                <p>{userDetails.typeOfContent}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Niches</p>
                <div className='flex flex-wrap gap-2 mt-1'>
                  {userDetails.niches.map((niche, index) => (
                    <span
                      key={userDetails.id + index}
                      className={`inline-block text-white text-[18px] leading-[22px] ${index % 2 === 0 ? 'bg-[#ec01ff]' : 'bg-[#2521ff]'} rounded-full px-5 py-[5px]`}
                    >{niche}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-lg font-semibold">Interests</p>
                <div className='flex flex-wrap gap-2 w-full mt-1'>
                  {userDetails.interests.map((interest, index) => (
                    <span
                      key={userDetails.id + index}
                      className='inline-block text-[#ec01ff] text-[16px] leading-[18px] border-[1px] border-[#ec01ff] rounded-full px-5 py-3'
                    >{interest}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-lg font-semibold">Social Media Apps</p>
                <div className='mt-2'>
                  {userDetails.social_media_apps.map((app, index) => {
                    const getMoveFromRightValue = (app: string) => {
                      switch (app.trim()) {
                        case 'instagram':
                          return "right-[-147px]";
                        case 'youtube':
                          return "right-[-71px]";
                        case 'snapchat':
                          return "right-[100px]";
                        case 'tiktok':
                          return "right-[0px]";
                        case 'twitter':
                          return "right-[-219px]";
                        case 'facebook':
                          return "right-[-290px]";
                        default:
                          return "right-[0px]"; // Default value if app doesn't match any case
                      }
                    };
                    const moveFromRight = getMoveFromRightValue(app);
                    return (
                      <span
                        key={userDetails.id + index}
                        className='relative inline-block w-[73px] h-[73px] overflow-hidden'
                      >
                        {/* {app} {userDetails.social_media_apps.length !== index + 1 && ','} */}

                        <div
                          className={`absolute ${moveFromRight} block w-[365px] h-[73px] overflow-hidden`}
                        >
                          <img
                            src={'../static/social-media-icons.png'}
                            alt={'media'}
                            className="  -[73px]"
                          />

                        </div>


                      </span>
                    )
                  })}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-lg font-semibold">Media</p>
                <div className='flex flex-wrap gap-x-2'>
                  {userDetails.media.map((item, index) => (
                    <div key={userDetails.id + index}>
                      {item.type === "video" &&
                        <>
                          {/* <video controls className="rounded-md block h-auto w-full max-w-[200px] bg-gray-100 dark:bg-slate-800">
                            <source src={item.link} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video> */}
                          {/* <iframe
                            width="100%"
                            height="auto"
                            src={'https://www.youtube.com/watch?v=QC8iQqtG0hg&ab_channel=PanamaCityNewsHerald'}
                            title={`Video ${index}`}
                            // frameBorder="0"
                            allowFullScreen
                            className="rounded-md block h-auto w-full max-w-[200px] bg-gray-100 dark:bg-slate-800"
                          /> */}
                          <iframe width="200px"
                            height="110"
                            src="https://www.youtube.com/embed/QC8iQqtG0hg?si=vZSEPIeqlBRJW8tR"
                            // src={item.link}
                            title="YouTube video player"
                            frameBorder="0"
                            className='rounded-md'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </>
                      }
                      {item.type === "photo" &&
                        <img
                          src={item.link}
                          alt={'media'}
                          className="rounded-md block h-auto w-full max-w-[200px] bg-gray-100 dark:bg-slate-800"
                        />
                      }
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-lg font-semibold">Location</p>
                {/* <p>{userDetails.location}</p> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28874.848378370385!2d55.237881401355224!3d25.22493012234529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4244dde67821%3A0x2a9b18ce766874cf!2sJumeirah%20-%20Jumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709211362811!5m2!1sen!2s"
                  width="600"
                  height="250"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              {userDetails.block === true &&
                (
                  <div className="col-span-2 sm:col-span-2">
                    <p className="flex text-red-500 font-blocked">
                      <Icon path={mdiAlert} size="20" /> Blocked
                    </p>
                  </div>
                )}

              {userDetails.reported !== '' &&
                (
                  <div className="col-span-2 sm:col-span-2">
                    <p className="text-red-500 font-blocked">Reported: {userDetails.reported}</p>
                  </div>
                )}
            </div>
          )}
        </CardBox>
      </SectionMain>
    </>
  )
}

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UsersPage
