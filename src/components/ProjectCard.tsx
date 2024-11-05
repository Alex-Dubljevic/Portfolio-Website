import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links, hackathon } = project;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        {image && (
          <Link href={href || image}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top rounded-sm"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      {hackathon && (
        <div className="px-6 pb-2">
          <div className="inline-flex items-center gap-2 rounded-lg border bg-secondary/50 px-2 py-1">
            <Icon name="trophy" className="size-3 text-yellow-500" />
            <span className="text-xs font-medium">{hackathon}</span>
          </div>
        </div>
      )}
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.toSorted().map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <Icon name={link.icon} className="size-3" />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
