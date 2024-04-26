import $api from "../axios/index";

export default class FaqService {

  static getAllFaqs(setFaqs) {
    $api
      .get('/faqs')
      .then(({ data }) => setFaqs(data))
      .catch(error => {
        console.log(error);
      });
  }

  static deleteFaq(id) {
    $api
      .delete('/faqs', { data: { id } })
      .then(res => {
        //res.data contain deleted faq
      })
      .catch(error => {
        console.log(error);
      });
  }

  static postFaq(summary, info) {
    $api
      .post('/faqs', { summary, info })
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  static putFaq(id, summary, info) {
    $api
      .put('/faqs', { id, summary, info })
      .then(res => {
        //res.data contain prev. faq
      })
      .catch(error => {
        console.log(error);
      });
  }
}
