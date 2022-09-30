import { Input, Button } from 'antd';
import { FormattedMessage} from "react-intl";

function NewsLetter() {
  return (
    <div className="py-4 xl:mx-auto">
      <div className="text-2xl font-bold py-4"><FormattedMessage id="footerNewsletter" /></div>
      <div className="text-base py-2 w-72">
      <FormattedMessage id="footerNewsletterDesc" />
      </div>
      <div className="py-8">
        <Input.Group compact style={{ display: 'flex' }}>
          <Input className="h-12" style={{ width: 'calc(100% -240px)' }} />
          <Button className="h-12 bg-[#0D567A] hover:bg-[#0D567A]" type="primary">
          <FormattedMessage id="footerNewsletterSubs" />
          </Button>
        </Input.Group>
      </div>
    </div>
  );
}

export default NewsLetter;
