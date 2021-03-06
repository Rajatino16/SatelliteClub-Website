import React from 'react';
import CommonSection from './commonSection';
import Navbar from './Navbar';
import ContentSection from './contentSection';
import SatelliteTypeSection from './SatelliteTypeSection';

const Satellite = () => {
  return (
    <>
      <Navbar color='#1d5674' />
      <CommonSection
        title='SATELLITES'
        imgsrc='https://i.pinimg.com/originals/56/d4/a5/56d4a5174adc7d8d30bda7d73b514d56.gif'
      />
      <ContentSection
        title='Lrem Ipsum'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum consequat nisl vel pretium lectus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ullamcorper a lacus vestibulum sed arcu non odio. Eget nunc lobortis mattis aliquam faucibus. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a diam sollicitudin tempor id. Aliquam purus sit amet luctus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Nulla facilisi morbi tempus iaculis urna id volutpat. Tincidunt eget nullam non nisi est sit amet.

'
      />
      <SatelliteTypeSection
        title='Environmental Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <SatelliteTypeSection
        title='Earth Observing Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <SatelliteTypeSection
        title='Weather Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <SatelliteTypeSection
        title='Defence Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
    </>
  );
};

export default Satellite;
