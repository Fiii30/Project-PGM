import DashboardHero from "./sections/DashboardHero";
import WorkForm from "./sections/WorkForm";
import WorkList from "./sections/WorkList";

export default function DashboardPage() {
  return (
    <>
      <DashboardHero />
      <WorkForm />
      <WorkList />
    </>
  );
}
