import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import gaming from '../../public/img/gaming.jpg';
import tech from '../../public/img/tech.jpg';
import about from '../../public/img/netsoc.jpg';

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="About" color="#0CCAF5" />
      <Box
        color="linear-gradient(180deg,#0CCAF5,#00fff3)"
        offsetColor="#0CCAF5"
        textColor="#0c5b6d"
        image={about}
      >
        <p>
          A member of the Irish Intersocs Community, UCC Netsoc (the Networking,
          Gaming and Technology Society) runs a digital services network and
          provides educational opportunities for its members as well as weekly
          gaming and social events.
        </p>
        <p>
          For more in-depth information on our society and how it runs, visit
          our <a href="https://wiki.netsoc.co">wiki</a>.
        </p>
      </Box>
      <Header value="Gaming" color="#0CEBD7" />
      <Box
        color="linear-gradient(180deg,#0CEBD7,#00ffad)"
        offsetColor="#0CEBD7"
        textColor="#286962"
        image={gaming}
      >
        <p>
          Every Tuesday is Gaming Night at Netsoc. We host a variety of gaming events, including VR competitions,
          LAN nights and many more. In addition, we also host General Gaming events, which are a great way to enjoy casual gaming, make new friends, and try out the latest games.
        </p>
        <p>
          We are also a member of the Irish Collegiate Esports. Our eSports team, the Netsoc Rebels, compete in games such as 
          CS:GO, Overwatch, Rainbow Six Siege and League of Legends. 
          If you'd like to keep up-to-date with the latest news and announcements, be sure to join our <a href="https://esports.netsoc.co">
          eSports Discord server
          </a>. 
        </p>
      </Box>
      <Header value="Tech" color="#007BDE" />
      <Box
        color="linear-gradient(180deg,#007BDE,#da80ff)"
        textColor="#012848"
        offsetColor="#007BDE"
        image={tech}
      >
        <p>
          We host weekly tech events, from informative tech talks to
          comprehensive, hands-on tutorials. Got an interest in web dev? Want to
          gain more insight into the technologies that power our lives? You're
          sure to enjoy our tech talks! 
        </p>
        <p>
          Tech talks are a great way to showcase what you're passionate about.
          If you'd like to host one, feel free to let us know and we'd be more
          than happy to host you!
        </p>

        <p>
          As well as that, we've brought students to CIX, Cork's very own datacentre, took them to SISTEM in Dublin, which is a yearly conference for tech students, 
          and also attended FOSDEM, an annual developer's conference in Brussels.
        </p>

      </Box>
    </div>
  );
}
