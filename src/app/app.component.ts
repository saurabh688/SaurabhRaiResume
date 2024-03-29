import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SaurabhRai';
  technicalSkills = [
    {
      title: 'Programming Languages / Web Development',
      value: [
        'React JS',
        'React Native',
        'Redux',
        'Material UI',
        'Angular',
        'Angular Material',
        'Nodejs',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
        'Ionic',
        'Cordova',
        'Java',
        'C',
        'C++',
      ],
    },
    {
      title: 'Cloud',
      value: [
        'Google Cloud (Compute Engine, App Engine, DevOps)',
        'Microsoft Azure (DevOps)',
        'AWS (ec2, s3)',
        'Google Ads',
        'Merchant center',
      ],
    },
    {
      title: 'Database',
      value: [
        'SQL',
        'NO-SQL',
        'MySQL',
        'Mongo DB',
        'Oracle RDBMS',
        'CouchDB and Pouch DB',
      ],
    },
    {
      title: 'Tools / Technologies',
      value: [
        'Git',
        'GitHub',
        'Jira',
        'Postman',
        'Insomnia',
        'Swagger',
        'Keycloak',
        'VSCode',
        'Eclipse',
        'Figma',
        'Saas',
        'Microservices',
      ],
    },
  ];

  companies = [
    {
      name: 'Paysfer eMart',
      href: '',
      location: 'Bangalore, India',
      position: 'Lead Full Stack Developer - Intern',
      dateRange: 'June 2022 – Present',
      points: [
        'Design architecture of 2 web applications to create a plan for storing data, APIs, and user’s experience, enabling company to launch a resale and an e-commerce website',
        'Create RESTful APIs to develop interaction between front and back-end of both web applications, implementing UI and business logic, using React and NodeJS ',
        'Deploy front and back-end code on GCP (Google Cloud Platform) using App Engine and Compute Engine to host new applications on distributed server',
        'Designed schema for data storage and installed MongoDB in virtual machine to store data on Compute Engine ',
        'Executed RESTful APIs calls and integrated channel advisor APIs and search.io APIs to enable sellers to send product information and to retrieve faster search result data',
      ],
    },
    {
      name: 'Blue Yonder',
      href: 'https://blueyonder.com/',
      location: 'Bangalore, India',
      position: 'Software Engineer II',
      dateRange: 'March 2020-August 2021',
      points: [
        'Created enterprise web application to configure and integrate multiple modules, such as product availability, selling channels, fulfillment types and optimization rules',
        'Implemented and integrated UI and business logic using React and Angular to increase usability of web application',
        'Executed APIs calls and integrated configuration for front-end, allowing application to communicate with server',
        'Fulfilled project requirements following Agile methodology to ensure product quality and delivery',
      ],
    },
    {
      name: 'Crecientech Infosystem Pvt. Ltd',
      href: 'https://www.crecientech.com/',
      location: 'Bangalore, India',
      position: 'Software Engineer',
      dateRange: 'February 2018-March 2020',
      points: [
        'Developed web and mobile applications for three clients with varying team size, scale, and requirements',
        'Created mobile application using Ionic framework to collect information of physical and mental disabilities to provide appropriate governmental assistance',
        'Created web application using Angular and Nodejs for assessing affiliation status of Bangalore University colleges, digitizing process of inspection and scoring under the guidance of vice Chancellor of Karnataka',
        'Developed real estate web application (Kavaho), implementing several modules, such as messaging, analytics board, and payment gateway to facilitate tenant-landlord interactions',
      ],
    },
  ];
}
