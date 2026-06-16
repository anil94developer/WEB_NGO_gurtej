import PillarPageLayout from '../components/layout/PillarPageLayout';
import { PILLAR_PAGES } from '../utils/siteContent';

export default function AnimalWelfarePage() {
  return <PillarPageLayout data={PILLAR_PAGES.animal_welfare} />;
}
