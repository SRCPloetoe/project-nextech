import kushImg from '../img/team/kush_kharia.png';
import forestImg from '../img/team/forest_liang.png';
import julianImg from '../img/team/julian_garcia.png';
import colinImg from '../img/team/colin_thompson.png';
import danielImg from '../img/team/daniel_eremin.png';
import praemImg from '../img/team/praem_kumar.png';
import pryyaImg from '../img/team/pryya_surarujiroj.png';
import mirabelleImg from '../img/team/mirabelle_egilmez.png';
import kausikImg from '../img/team/kausik_ray_chaudhuri.png';
import jpImg from '../img/team/jp_pierce.png';
import paulImg from '../img/team/nt_leader.png';
import tayyarImg from '../img/team/nt_leader.png';
import jocelynImg from '../img/team/nt_leader.png';
import srinivasImg from '../img/team/nt_leader.png';
import rimaImg from '../img/team/nt_leader.png';
import ntLeaderImg from '../img/team/nt_leader.png';
import shounakImg from '../img/team/shounak_ray_chaudhuri.png';
import matthewImg from '../img/team/matthew_hsu.png';
import peytonImg from '../img/team/peyton_slape.png';
import shravyaImg from '../img/team/shravya_hatathodi.png';
import src1 from '../img/team/src_1.png';
import src2 from '../img/team/src_2.png';
import src3 from '../img/team/src_3.png';
import src4 from '../img/team/src_4.png';
import src5 from '../img/team/src_5.png';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamMemberDialog from '../components/TeamMemberDialog.tsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const makeTeam = (count: number, title: string) =>
  Array.from({ length: count }, (_, i) => ({
    name: `${title} ${i + 1}`,
    role: `${title} Role`,
    images: [
      'https://source.unsplash.com/200x200/?person,portrait',
      'https://source.unsplash.com/200x200/?person,profile',
    ],
  }));

const execCommittee = [
  {
    name: 'Shounak Ray Chaudhuri',
    role: 'President',
    images: [shounakImg],
  },
  {
    name: 'Matthew Hsu',
    role: 'Co-President',
    images: [matthewImg],
  },
  {
    name: 'Peyton Slape',
    role: 'VP of Curriculum',
    images: [peytonImg],
  },
  {
    name: 'Shravya Hatathodi',
    role: 'VP of Outreach',
    images: [shravyaImg],
  },
];
const curriculumManagers = [
  { name: 'Matthew Hsu', images: [matthewImg], role: 'Engineering Manager' },
  { name: 'Kush Kharia', images: [kushImg], role: 'Engineering Manager' },
  { name: 'Forest Liang', images: [forestImg], role: 'Mentoring Manager' },
  { name: 'Peyton Slape', images: [peytonImg], role: 'Programming Manager' },
  { name: 'Julian Garcia', images: [julianImg], role: 'Programming Manager' },
  { name: 'Colin Thompson', images: [colinImg], role: 'Physics/Math Manager' },
  { name: 'Peyton Slape', images: [peytonImg], role: 'Natural Sciences Manager' },
  { name: 'Daniel Eremin', images: [danielImg], role: 'Webmaster' },
];
const outreachManagers = [
  { name: 'Shravya Hatathodi', images: [shravyaImg], role: 'Marketing Manager' },
  { name: 'Praem Kumar', images: [praemImg], role: 'Logistics Manager' },
  { name: 'Pryya Surarujiroj', images: [pryyaImg], role: 'Logistics Manager' },
  { name: 'Mirabelle Egilmez', images: [mirabelleImg], role: 'Policy/International Manager' },
];
const board = [
  { name: 'Kausik Ray Chaudhuri', images: [kausikImg], role: 'Board Chair' },
  { name: 'J.P. Pierce', images: [jpImg], role: 'Board Member' },
  { name: 'Paul Hsu', images: [paulImg], role: 'Board Member' },
  { name: 'Tayyar Egilmez', images: [tayyarImg], role: 'Board Member' },
  { name: 'Jocelyn Slape', images: [jocelynImg], role: 'Board Member' },
  { name: 'Srinivas Hatathodi', images: [srinivasImg], role: 'Board Member' },
  { name: 'Rima Chatterjee', images: [rimaImg], role: 'Board Member' },
  { name: 'TBD', images: [ntLeaderImg], role: 'Board Member' },
];
const divisionLeads = makeTeam(8, 'Division');

const leadershipStructure = [
  {
    title: 'Executive Committee',
    description: 'Oversees all operations and strategic direction.'
  },
  {
    title: 'Curriculum & Outreach Managers',
    description: 'Lead curriculum development and community engagement.'
  },
  {
    title: 'Division Leads',
    description: 'Coordinate specific program areas and initiatives.'
  }
];

const TeamGrid = ({ team }: { team: { name: string; role: string; images: string[] }[] }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMember, setDialogMember] = useState<{ name: string; images: string[]; description: string } | null>(null);

  // Default description generator
  const getDescription = (member: any) => {
    if (member.name === 'Shounak Ray Chaudhuri') {
      return `Shounak Ray Chaudhuri is the President of Project NexTech. He leads the organization in its mission to inspire and support a global community of students through interactive, accessible, and high-quality STEM education. Shounak has a passion for technology, education, and community building.\n\nAchievements:\n- Founded Project NexTech\n- Led curriculum development for multiple STEM programs\n- Organized outreach events impacting hundreds of students\n\nInterests: AI, Robotics, Physics, Mentoring.`;
    }
    // Add more custom descriptions here if desired
    return `${member.name} serves as ${member.role} at Project NexTech. More information about their background and contributions will be added soon.`;
  };

  // Default images generator


  const getImages = (member: any) => {
    if (member.name === 'Shounak Ray Chaudhuri') {
      return [src1, src2, src3, src4, src5];
    }
    // For all other leaders, use nt_leader.png for all five dialog images
    return [ntLeaderImg, ntLeaderImg, ntLeaderImg, ntLeaderImg, ntLeaderImg];
  };

  const handleLearnMore = (member: any) => {
    setDialogMember({
      name: member.name,
      images: getImages(member),
      description: getDescription(member)
    });
    setDialogOpen(true);
  };

  return (
    <>
      <Box
        mb={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1600px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
      >
        {team.map((member, idx) => (
          <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="center" maxHeight="175px">
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%" pl={0} pr={0} py={2}>
              <img
                src={member.images[0]}
                alt={member.name}
                style={{
                  borderRadius: 12,
                  height: '100%',
                  width: '175px',
                  objectFit: 'contain',
                  display: 'block',
                  maxWidth: '100%',
                }}
                srcSet={`${member.images[0]} 175w`}
                sizes="(max-width: 1200px) 150px, 175px"
              />
            </Box>
            <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" pl={2} pr={2} py={2}>
              <Typography
                variant="h6"
                fontWeight={700}
                fontFamily="Inter, Arial, sans-serif"
                mb={0.5}
                sx={{
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.2rem',
                    md: '1.25rem',
                  },
                  '@media (max-width:1600px)': {
                    fontSize: 'calc(1.25rem - ((1600px - 100vw) / 800 * 0.15rem))',
                  },
                  '@media (max-width:1200px)': {
                    fontSize: '1.1rem',
                  },
                }}
              >
                {member.name}
              </Typography>
              <Typography
                color="text.secondary"
                fontFamily="Inter, Arial, sans-serif"
                mb={1}
                sx={{
                  fontSize: {
                    xs: '0.95rem',
                    sm: '1rem',
                    md: '1.05rem',
                  },
                  '@media (max-width:1600px)': {
                    fontSize: 'calc(1.05rem - ((1600px - 100vw) / 800 * 0.1rem))',
                  },
                  '@media (max-width:1200px)': {
                    fontSize: '0.95rem',
                  },
                }}
              >
                {member.role}
              </Typography>
              <Box mt={1}>
                <button
                  style={{
                    background: '#f24c02',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '6px 16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 14
                  }}
                  onClick={() => handleLearnMore(member)}
                >Learn more</button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {dialogMember && (
        <TeamMemberDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          name={dialogMember.name}
          images={dialogMember.images}
          description={dialogMember.description}
        />
      )}
    </>
  );
};

const BoardGrid = ({ team }: { team: { name: string; role: string; images: string[] }[] }) => (
  <Box
    mb={4}
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: { xs: 2, md: 4 },
  '@media (max-width:1600px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
    }}
  >
    {team.map((member, idx) => (
  <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="center" minHeight="150px">
    <Box display="flex" flexDirection="column" justifyContent="center" height="100%" pl={0} pr={0} py={2}>
      <img
        src={member.images[0]}
        alt={member.name}
        style={{
          borderRadius: 12,
          height: '100%',
          width: '175px',
          objectFit: 'contain',
          display: 'block',
          maxWidth: '100%',
        }}
        srcSet={`${member.images[0]} 175w`}
        sizes="(max-width: 1200px) 150px, 175px"
      />
    </Box>
  <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" pl={0} pr={2} py={2}>
          <Typography variant="h6" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={0.5}>
            {member.name}
          </Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={1}>
            {member.role}
          </Typography>
          <Box mt={1}>
            <button style={{
              background: '#f24c02',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '6px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: 14
            }}>Learn more</button>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
);

const Team: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    {/* Executive Committee */}
    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Active Executive Committee
    </Typography>
    <TeamGrid team={execCommittee} />

    {/* Curriculum Managers */}
  <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Curriculum Managers
    </Typography>
    <TeamGrid team={curriculumManagers} />

    {/* Outreach Managers */}
    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Outreach Managers
    </Typography>
    <TeamGrid team={outreachManagers} />

    {/* Board of Directors */}
    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Board of Directors
    </Typography>
  <TeamGrid team={board} />

    {/* Division Leads */}
    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Division Leads
    </Typography>
    <TeamGrid team={divisionLeads} />

    {/* Organizational Structure Section Header */}
  <Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
      Organizational Structure
    </Typography>
    {/* Three Column Section Like About Top, No Cards */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
      {leadershipStructure.map((item, idx) => (
        <Box key={idx} p={4} minHeight={180} display="flex" flexDirection="column" justifyContent="center" bgcolor="transparent" textAlign="center">
          <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
            {item.title}
          </Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" align="center">
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Team;