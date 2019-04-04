import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Tableaux contenant les post


 @Input() posts  = [
    {
      title:'Le Framework JS',
      content:'Aux débuts du développement web, seul le HTML permet de créer des sites. Les sites web en 1990 ressemblent à des documents texte, car il n’existe pas vraiment d’autres possibilités. Ensuite, en 1998, le CSS arrive pour aider à créer des mises en page plus esthétiques. Finalement, à partir du début des années 2000, le JavaScript commence son règne sur le développement web, permettant des interactions entre l’utilisateur et la page.',
      loveIts:10,
      created_at:Date
    },
    {
      title:'Pourquoi Angular',
      content:'l y a plusieurs frameworks JavaScript très populaires aujourd’hui : Angular, React, Ember, Vue… les autres frameworks marchent très bien, ont beaucoup de succès et sont utilisés sur des sites extrêmement bien fréquentés, React et Vue notamment. Angular présente également un niveau de difficulté légèrement supérieur, car on utilise le TypeScript plutôt que JavaScript pur ou le mélange JS/HTML de React. Ainsi, quels sont donc les avantages d’Angular ?',
      loveIts:-4,
      created_at:Date
    },
    {
      title:'Qu\'est ce que le type Script' ,
      content:'Pour faire bref, le TypeScript est un sur-ensemble (un “superset”) de JavaScript qui est justement transcompilé (transcompilation : "traduction" d\'un langage de programmation vers un autre - différent de la compilation, qui transforme généralement le code vers un format exécutable) en JavaScript pour être compréhensible par les navigateurs. Il ajoute des fonctionnalités extrêmement utiles, comme, entre autres :',
      loveIts:2,
      created_at:Date
    },
    {
      title:'Qu\'est ce que cli',
      content:'Le CLI, ou “Command Line Interface” (un outil permettant d\'exécuter des commandes depuis la console), d’Angular est l’outil qui vous permet d’exécuter des scripts pour la création, la structuration et la production d’une application Angular.',
      loveIts:5,
      created_at:Date
    }
  ];
}
