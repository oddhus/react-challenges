/**
 * Pass the necessary props to component and add javascript to the markup
 */
export default function Challenge4() {
  return <UserBirthYearInformation />;
}

interface BirthYearInformationProps {
  year: number;
  name: string;
}

const UserBirthYearInformation = ({
  name,
  year,
}: BirthYearInformationProps) => {
  return <div>name was born in year</div>;
};
