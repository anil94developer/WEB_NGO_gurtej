import PillarPageLayout from '../components/layout/PillarPageLayout';
import { PILLAR_PAGES } from '../utils/siteContent';

export default function HumanWelfarePage() {
  return <PillarPageLayout data={PILLAR_PAGES.human_welfare} />;
}
