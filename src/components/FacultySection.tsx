import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FacultySection = () => {
  const faculties = [
    {
      name: "Механико-математический факультет",
      dean: "проф. Радченко В.П.",
      departments: 8,
      students: 1200,
      description: "Математика, механика, компьютерные науки",
      color: "bg-blue-50 border-blue-200",
      icon: "Calculator",
    },
    {
      name: "Физический факультет",
      dean: "проф. Аникин В.М.",
      departments: 6,
      students: 900,
      description: "Физика, оптика, электроника",
      color: "bg-purple-50 border-purple-200",
      icon: "Atom",
    },
    {
      name: "Химический факультет",
      dean: "проф. Федотова О.В.",
      departments: 4,
      students: 650,
      description: "Химия, химическая технология",
      color: "bg-green-50 border-green-200",
      icon: "TestTube",
    },
    {
      name: "Биологический факультет",
      dean: "проф. Шляхтин Г.В.",
      departments: 5,
      students: 800,
      description: "Биология, экология, биотехнология",
      color: "bg-emerald-50 border-emerald-200",
      icon: "Leaf",
    },
    {
      name: "Геологический факультет",
      dean: "проф. Макаров В.Н.",
      departments: 3,
      students: 400,
      description: "Геология, геофизика, геоэкология",
      color: "bg-amber-50 border-amber-200",
      icon: "Mountain",
    },
    {
      name: "Географический факультет",
      dean: "проф. Макаров В.З.",
      departments: 4,
      students: 500,
      description: "География, картография, туризм",
      color: "bg-cyan-50 border-cyan-200",
      icon: "Globe",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Факультеты</h2>
          <p className="text-lg text-gray-600">
            Широкий спектр образовательных направлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${faculty.color}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon name={faculty.icon} className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">
                    {faculty.departments} кафедр
                  </Badge>
                </div>
                <CardTitle className="text-lg">{faculty.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{faculty.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="User" size={16} className="mr-2" />
                    Декан: {faculty.dean}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Users" size={16} className="mr-2" />
                    Студентов: {faculty.students}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
