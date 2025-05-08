import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <header className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-3xl font-bold">
            Rowel Brosola, Full Stack Developer
          </h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Taguig, Philippines, (+63) 956 045 3318, rowelbrosola@gmail.com
        </p>
        <div className="mt-4">
          <Button asChild>
            <a href="/Rowel_Brosola_-_Full_Stack_Developer.pdf" download>
              <FileDown className="mr-2 h-4 w-4" />
              Download Resume PDF
            </a>
          </Button>
        </div>
      </header>

      <Separator className="my-6" />

      {/* Profile Section */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
        <h2 className="text-lg font-semibold uppercase tracking-wide">
          Profile
        </h2>
        <div>
          <p className="text-sm leading-relaxed">
            Dynamic <span className="font-semibold">Full Stack Developer</span>{" "}
            with <span className="font-semibold">8 years of experience</span>{" "}
            building high-performance, scalable web applications that elevate
            user experience. Specialized in{" "}
            <span className="font-semibold">
              React.js, Next.js, and TypeScript
            </span>{" "}
            with deep expertise in{" "}
            <span className="font-semibold">
              state management, responsive design, and component architecture
            </span>
            . Proven track record of developing{" "}
            <span className="font-semibold">reusable UI libraries</span>,
            integrating{" "}
            <span className="font-semibold">
              frontend systems with RESTful APIs
            </span>
            , and delivering secure, maintainable code. Passionate about
            optimizing performance, enhancing usability, and shipping innovative
            digital solutions that meet business goals and delight users.
          </p>
        </div>
      </section>

      {/* Employment History Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
          Employment History
        </h2>

        <div className="space-y-6">
          {/* Job 1 */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-2">
                <div>
                  <div className="flex items-baseline justify-between md:justify-start gap-2">
                    <h3 className="font-semibold">
                      Full Stack Developer, LICA Ventures
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Aug 2022 — Present
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:hidden">
                    Makati City
                  </p>
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                  Makati City
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Led the frontend development using{" "}
                  <span className="font-semibold">React.js</span> to create
                  dynamic, component-based interfaces aligned with business
                  requirements.
                </li>
                <li>
                  Built a <span className="font-semibold">responsive UI</span>{" "}
                  using modern JavaScript (ES6+) and React best practices,
                  ensuring seamless experiences across desktop and mobile
                  devices.
                </li>
                <li>
                  Created a <span className="font-semibold">RESTful API</span>{" "}
                  to support frontend features and enable integration with
                  internal and third-party applications.
                </li>
                <li>
                  Implemented security features and real-time order processing
                  in a <span className="font-semibold">PHP backend</span>,
                  integrated cleanly with the React frontend.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 2 */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-2">
                <div>
                  <div className="flex items-baseline justify-between md:justify-start gap-2">
                    <h3 className="font-semibold">
                      Frontend Engineer, Renren, Inc.
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Apr 2022 — Aug 2022
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:hidden">
                    Mandaluyong City
                  </p>
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                  Mandaluyong City
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Built a custom{" "}
                  <span className="font-semibold">UI component library</span> in
                  React to promote consistency and speed up development across
                  teams.
                </li>
                <li>
                  Developed reusable and optimized components with hooks and
                  context API, reducing code redundancy and improving
                  scalability.
                </li>
                <li>
                  Collaborated closely with backend developers and designers to
                  ensure seamless API integration and pixel-perfect
                  implementation.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 3 */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-2">
                <div>
                  <div className="flex items-baseline justify-between md:justify-start gap-2">
                    <h3 className="font-semibold">
                      Software Engineer, Accenture Philippines
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Jul 2021 — Apr 2022
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:hidden">
                    Mandaluyong City
                  </p>
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                  Mandaluyong City
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Developed and maintained scalable frontend applications using{" "}
                  <span className="font-semibold">React.js</span>, integrating
                  seamlessly with backend services via{" "}
                  <span className="font-semibold">REST APIs</span>.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality software aligned with client expectations and
                  timelines.
                </li>
                <li>
                  Conducted <span className="font-semibold">code reviews</span>,
                  enforced best practices, and mentored junior developers to
                  improve code quality and team efficiency.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 4 */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-2">
                <div>
                  <div className="flex items-baseline justify-between md:justify-start gap-2">
                    <h3 className="font-semibold">
                      Web Developer, LICA Ventures
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Jul 2019 — Jul 2021
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:hidden">
                    Makati City
                  </p>
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                  Makati City
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Developed a secure, interactive web application with a modern
                  front-end framework and an intuitive user interface.
                </li>
                <li>
                  Integrated a payment gateway into the website, allowing for
                  secure online payments.
                </li>
                <li>
                  Developed an API that enabled the exchange of data in their
                  existing systems.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 5 */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-2">
                <div>
                  <div className="flex items-baseline justify-between md:justify-start gap-2">
                    <h3 className="font-semibold">
                      Backend Developer, Virtual Wonders Web Solutions
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Sep 2017 — Jul 2019
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:hidden">
                    Alaminos
                  </p>
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                  Alaminos
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Developed a RESTful API that allowed the app to integrate with
                  backend services, resulting in enhanced user experience.
                </li>
                <li>
                  Used Git for version control and collaborated with other
                  developers using pull requests.
                </li>
                <li>
                  Developed and maintained a database of client information,
                  allowing for easy tracking of customer records and
                  interactions.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
          Education
        </h2>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2">
              <div>
                <div className="flex items-baseline justify-between md:justify-start gap-2">
                  <h3 className="font-semibold">
                    Bachelor of Science in Computer Science, PASS College
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Jun 2013 — Apr 2017
                  </span>
                </div>
                <p className="text-sm text-muted-foreground md:hidden">
                  Alaminos
                </p>
              </div>
              <p className="text-sm text-muted-foreground hidden md:block">
                Alaminos
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">MySQL</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Testing</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Jest</Badge>
              <Badge variant="outline">React Testing Library</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Other</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Jotai</Badge>
              <Badge variant="outline">TanStack Query</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
