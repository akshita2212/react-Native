import Angry from '../../images/angry.png';
import Anxious from '../../images/anxious.png';
import Happy from '../../images/happy.png';
import Neutral from '../../images/neutral.png';
import Sad from '../../images/sad.png';
import Sick from '../../images/sick.png';

module.exports = {
  firstRow: {
    options: [
      {
        name: 'Happy',
        image: Happy
      },
      {
        name: 'Sad',
        image: Sad
      },
      {
        name: 'Anxious',
        image: Anxious
      }
    ]
  },
  secondRow: {
    options: [
      {
        name: 'Sick',
        image: Sick
      },
      {
        name: 'Angry',
        image: Angry
      }
    ]
  },
  thirdRow: {
    options: [
      {
        name: 'Other',
        image: Neutral
      }
    ]
  }
}