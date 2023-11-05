import { SubIssue } from '@/interfaces/IssueInterface';
import { FC } from 'react';
import IssueItem from './IssueItem';
import _ from 'lodash';

interface Props {
  minimal?: boolean;
  data: SubIssue[];
}

const ignoreWords = ['', '-', 'ไม่มี', 'ไม่มีปัญหา'];

const IssueList: FC<Props> = ({ minimal = false, data = [] }) => {
  return (
    <div className="w-full flex flex-col gap-3 overflow-hidden">
      {_.orderBy(data, (o) => o.count, 'desc')
        .filter(
          (value) =>
            !ignoreWords.includes(value.name) &&
            value.name.indexOf('ไม่เคย') == -1
        )
        .slice(0, minimal ? 10 : 11)
        .map((value, idx) => {
          return <IssueItem key={idx} data={value} />;
        })}
    </div>
  );
};

export default IssueList;
